import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GRAPHS } from './data/graphs';

describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    app = TestBed.createComponent(AppComponent).componentInstance;
  });

  const type = (text: string) =>
    app.onInput({ target: { value: text } } as unknown as Event);

  it('starts at index 0 with the first graph', () => {
    expect(app.index).toBe(0);
    expect(app.jsonError).toBe('');
    expect(JSON.parse(app.text)).toEqual(GRAPHS[0].spec);
    expect(app.spec).toEqual(GRAPHS[0].spec);
  });

  it('cannot go backward from index 0', () => {
    expect(app.canGoBackward).toBeFalse();
    app.backward();
    expect(app.index).toBe(0);
  });

  it('moves forward and backward', () => {
    app.forward();
    expect(app.index).toBe(1);
    expect(app.spec).toEqual(GRAPHS[1].spec);
    app.backward();
    expect(app.index).toBe(0);
    expect(app.spec).toEqual(GRAPHS[0].spec);
  });

  it('cannot go forward past the last index', () => {
    for (let i = 0; i < GRAPHS.length + 3; i++) {
      app.forward();
    }
    expect(app.index).toBe(GRAPHS.length - 1);
    expect(app.canGoForward).toBeFalse();
  });

  it('keeps edits when navigating away and back', () => {
    type('{ broken');
    app.forward();
    app.backward();
    expect(app.text).toBe('{ broken');
    expect(app.jsonError).not.toBe('');
  });

  it('every bundled graph is valid', () => {
    for (let i = 0; i < GRAPHS.length; i++) {
      expect(app.jsonError).withContext(GRAPHS[i].topic).toBe('');
      app.forward();
    }
  });
});
