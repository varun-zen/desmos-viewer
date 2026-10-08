export interface GraphExpression {
  id: string;
  latex?: string;    // required for every expression except tables
  type?: string;     // e.g. "table"; Desmos defaults to "expression"
  color?: string;
  label?: string;
  showLabel?: boolean;
  [key: string]: unknown; // any other Desmos expression option is passed through
}

export interface Viewport {
  left: number;
  right: number;
  bottom: number;
  top: number;
}

export interface GraphSpec {
  expressions: GraphExpression[];
  viewport?: Viewport;
}

export type ParseResult =
  | { ok: true; spec: GraphSpec }
  | { ok: false; error: string };

const isObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);

/** Parses the editor text and checks it has the shape the graph expects. */
export function parseGraphSpec(text: string): ParseResult {
  if (!text.trim()) {
    return { ok: false, error: 'Input is empty.' };
  }

  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch (e) {
    return { ok: false, error: `Invalid JSON: ${(e as Error).message}` };
  }

  if (!isObject(data)) {
    return { ok: false, error: 'Top level must be a JSON object.' };
  }
  if (!Array.isArray(data['expressions'])) {
    return { ok: false, error: '"expressions" must be an array.' };
  }

  const ids = new Set<string>();
  const expressions = data['expressions'] as unknown[];
  for (let i = 0; i < expressions.length; i++) {
    const expr = expressions[i];
    const where = `expressions[${i}]`;
    if (!isObject(expr)) {
      return { ok: false, error: `${where} must be an object.` };
    }
    if (typeof expr['id'] !== 'string' || !expr['id']) {
      return { ok: false, error: `${where}.id must be a non-empty string.` };
    }
    if (ids.has(expr['id'])) {
      return { ok: false, error: `${where}.id "${expr['id']}" is duplicated.` };
    }
    ids.add(expr['id']);
    if (expr['type'] === 'table') {
      if (!Array.isArray(expr['columns'])) {
        return { ok: false, error: `${where}.columns must be an array for a table.` };
      }
    } else if (typeof expr['latex'] !== 'string') {
      return { ok: false, error: `${where}.latex must be a string.` };
    }
  }

  const viewport = data['viewport'];
  if (viewport !== undefined) {
    if (!isObject(viewport)) {
      return { ok: false, error: '"viewport" must be an object.' };
    }
    for (const key of ['left', 'right', 'bottom', 'top']) {
      if (typeof viewport[key] !== 'number' || !isFinite(viewport[key] as number)) {
        return { ok: false, error: `viewport.${key} must be a number.` };
      }
    }
    const v = viewport as unknown as Viewport;
    if (v.left >= v.right) {
      return { ok: false, error: 'viewport.left must be less than viewport.right.' };
    }
    if (v.bottom >= v.top) {
      return { ok: false, error: 'viewport.bottom must be less than viewport.top.' };
    }
  }

  return { ok: true, spec: data as unknown as GraphSpec };
}
