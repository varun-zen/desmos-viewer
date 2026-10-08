import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/** Loads the Desmos API script once and resolves with the global `Desmos` object. */
@Injectable({ providedIn: 'root' })
export class DesmosLoaderService {
  private loading?: Promise<any>;

  load(): Promise<any> {
    if (!this.loading) {
      this.loading = new Promise((resolve, reject) => {
        const w = window as any;
        if (w.Desmos) {
          resolve(w.Desmos);
          return;
        }
        const script = document.createElement('script');
        script.src = `https://www.desmos.com/api/${environment.desmosApiVersion}/calculator.js?apiKey=${environment.desmosApiKey}`;
        script.async = true;
        script.onload = () =>
          w.Desmos ? resolve(w.Desmos) : reject(new Error('Desmos API loaded but is unavailable (check your API key).'));
        script.onerror = () => {
          this.loading = undefined; // allow a retry
          reject(new Error('Could not load the Desmos API. Check your network connection and API key.'));
        };
        document.head.appendChild(script);
      });
    }
    return this.loading;
  }
}
