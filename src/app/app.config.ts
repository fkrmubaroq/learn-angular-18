import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { LucideAngularModule } from 'lucide-angular';
import { routes } from './app.routes';
import { ICONS } from './registry/icon.registry';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick(ICONS))
  ]
};
