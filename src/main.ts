///<reference path="../node_modules/@angular/core/src/application_ref.d.ts"/>
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//noinspection JSIgnoredPromiseFromCall
platformBrowserDynamic().bootstrapModule(AppModule);
