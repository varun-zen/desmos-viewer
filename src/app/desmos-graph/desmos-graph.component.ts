import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { GraphSpec } from '../models/graph-spec';
import { DesmosLoaderService } from '../services/desmos-loader.service';

/** An expression-level error reported by Desmos (e.g. LaTeX it can't understand). */
export interface ExpressionError {
  id: string;
  message: string;
}

@Component({
  selector: 'app-desmos-graph',
  template: `
    <div #host class="calculator"></div>
    <div *ngIf="loadError" class="overlay">{{ loadError }}</div>
  `,
  styleUrls: ['./desmos-graph.component.css'],
})
export class DesmosGraphComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() spec: GraphSpec | null = null;
  @Output() expressionErrors = new EventEmitter<ExpressionError[]>();

  @ViewChild('host', { static: true }) host!: ElementRef<HTMLDivElement>;

  loadError = '';
  private calculator: any;

  constructor(private loader: DesmosLoaderService, private zone: NgZone) {}

  async ngAfterViewInit(): Promise<void> {
    let Desmos: any;
    try {
      Desmos = await this.loader.load();
    } catch (e) {
      this.loadError = (e as Error).message;
      return;
    }

    // Keep Desmos's own animation/event loop out of Angular change detection.
    this.calculator = this.zone.runOutsideAngular(() =>
      Desmos.GraphingCalculator(this.host.nativeElement, {
        expressions: false,     
        settingsMenu: false,
        keypad: false,       
        lockViewport: true,
        zoomButtons: false,
      })
    );

    this.calculator.observeEvent('change', () => this.reportExpressionErrors());
    this.render();
  }

  ngOnChanges(): void {
    this.render();
  }

  ngOnDestroy(): void {
    this.calculator?.destroy();
  }

  private render(): void {
    if (!this.calculator || !this.spec) {
      return;
    }
    const { expressions, viewport } = this.spec;

    // Replace everything with the new spec.
    this.calculator.setBlank();
    this.calculator.setExpressions(expressions);
    if (viewport) {
      this.calculator.setMathBounds(viewport);
    }
  }

  /** Desmos parses LaTeX asynchronously; surface any per-expression errors to the editor. */
  private reportExpressionErrors(): void {
    const analysis = this.calculator.expressionAnalysis as Record<string, { isError?: boolean; errorMessage?: string }>;
    const errors = Object.entries(analysis)
      .filter(([, a]) => a.isError)
      .map(([id, a]) => ({ id, message: a.errorMessage ?? 'Invalid expression' }));
    this.zone.run(() => this.expressionErrors.emit(errors));
  }
}
