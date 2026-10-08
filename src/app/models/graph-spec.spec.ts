import { parseGraphSpec } from './graph-spec';

describe('parseGraphSpec', () => {
  it('accepts a valid spec', () => {
    const r = parseGraphSpec('{"expressions":[{"id":"a","latex":"y=x"}],"viewport":{"left":-1,"right":1,"bottom":-1,"top":1}}');
    expect(r.ok).toBeTrue();
  });

  it('rejects malformed JSON', () => {
    const r = parseGraphSpec('{"expressions": [');
    expect(r.ok).toBeFalse();
  });

  it('rejects missing latex', () => {
    const r = parseGraphSpec('{"expressions":[{"id":"a"}]}');
    expect(r.ok).toBeFalse();
  });

  it('rejects duplicate ids', () => {
    const r = parseGraphSpec('{"expressions":[{"id":"a","latex":"y=x"},{"id":"a","latex":"y=2x"}]}');
    expect(r.ok).toBeFalse();
  });

  it('rejects an inverted viewport', () => {
    const r = parseGraphSpec('{"expressions":[],"viewport":{"left":5,"right":1,"bottom":-1,"top":1}}');
    expect(r.ok).toBeFalse();
  });
});

describe('parseGraphSpec tables', () => {
  it('accepts a table without latex', () => {
    const r = parseGraphSpec('{"expressions":[{"id":"t","type":"table","columns":[{"latex":"x_1","values":["1"]}]}]}');
    expect(r.ok).toBeTrue();
  });

  it('rejects a table without columns', () => {
    const r = parseGraphSpec('{"expressions":[{"id":"t","type":"table"}]}');
    expect(r.ok).toBeFalse();
  });
});
