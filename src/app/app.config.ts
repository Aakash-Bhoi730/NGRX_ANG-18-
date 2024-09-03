import {
  ApplicationConfig,
  provideZoneChangeDetection,
  provideExperimentalZonelessChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { groceryReducer } from './store/reducer/grocery.reducer';
import { bucketReducer } from './store/reducer/bucket.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ groceries: groceryReducer, myBucket: bucketReducer }),
    provideEffects(),
    provideStoreDevtools({
      maxAge: 25,
      connectInZone: true,
      trace: false,
      logOnly: !isDevMode(),
      traceLimit: 75,
    }),
  ],
};
