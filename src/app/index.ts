import { combineReducers, provideStore } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { runEffects } from '@ngrx/effects';

// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';

// Application wide providers
export const APP_PROVIDERS = [
  AppState
];

export const APP_STORE = provideStore(
  compose(
    combineReducers
  )({

  })
);

export interface AppState {

}

export const APP_EFFECTS = runEffects([

]);