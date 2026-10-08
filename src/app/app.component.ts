import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime, filter } from 'rxjs';
import { GRAPHS } from './data/graphs';
import { ExpressionError } from './desmos-graph/desmos-graph.component';
import { GraphSpec, parseGraphSpec } from './models/graph-spec';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  readonly graphs = GRAPHS;
  index = 0;

  /** Editor text for each graph; edits survive navigation until the page is reloaded. */
  private drafts = this.graphs.map((g) => JSON.stringify(g.spec, null, 2));

  text = this.drafts[0] ?? '';
  spec: GraphSpec | null = null;
  jsonError = '';
  expressionErrors: ExpressionError[] = [];

  private input$ = new Subject<{ index: number; text: string }>();
  private sub: Subscription;

  constructor() {
    if (this.hasGraphs) {
      this.apply(this.text);
    }
    this.sub = this.input$
      .pipe(
        debounceTime(300),
        // Drop typing that was still pending when the user navigated to another graph.
        filter((e) => e.index === this.index)
      )
      .subscribe((e) => this.apply(e.text));
  }

  get hasGraphs(): boolean {
    return this.graphs.length > 0;
  }

  get canGoBackward(): boolean {
    return this.index > 0;
  }

  get canGoForward(): boolean {
    return this.index < this.graphs.length - 1;
  }

  onInput(event: Event): void {
    this.text = (event.target as HTMLTextAreaElement).value;
    this.drafts[this.index] = this.text;
    this.input$.next({ index: this.index, text: this.text });
  }

  backward(): void {
    if (this.canGoBackward) {
      this.goTo(this.index - 1);
    }
  }

  forward(): void {
    if (this.canGoForward) {
      this.goTo(this.index + 1);
    }
  }

  onExpressionErrors(errors: ExpressionError[]): void {
    this.expressionErrors = errors;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /** Shows the graph at `index` immediately (no debounce). */
  private goTo(index: number): void {
    this.index = index;
    this.text = this.drafts[index];
    this.apply(this.text);
  }

  /** Re-renders only on valid input; on invalid input the last good graph stays visible. */
  private apply(text: string): void {
    const result = parseGraphSpec(text);
    if (result.ok) {
      this.jsonError = '';
      this.spec = result.spec;
    } else {
      this.jsonError = result.error;
    }
  }
}
