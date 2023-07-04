import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding
} from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideZoneChangeDetection({runCoalescing: true, eventCoalescing: true}),
    // {provide: NgZone, useValue: CustomNzZone},
    /**
     * withFetch is needed to stop using polyfill in ssr
     */
    // provideHttpClient(withFetch())
  ],
};
