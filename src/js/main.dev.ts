// /// <reference path="../../typings/browser.d.ts" />

import { provide } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ExceptionHandler } from '@angular/core/src/facade/exception_handler';
import { AppExceptionHandler } from './facades/exception_handler';
import { AppComponent } from './components/app/app.component';

console.warn('-----------------------------------');
console.warn('Application is in Development mode!');
console.warn('-----------------------------------');

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' })
]).catch(err => console.error(err));