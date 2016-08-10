/*
 * These are globally available pipes in any template
 */

import { PLATFORM_PIPES } from '@angular/core';
// ng2-bootstrap
import { BOOTSTRAP_PIPES } from './ng2-bootstrap';

// application_pipes: pipes that are global through out the application
export const APPLICATION_PIPES = [
  ...BOOTSTRAP_PIPES
];

export const PIPES = [
  { provide: PLATFORM_PIPES, multi: true, useValue: APPLICATION_PIPES }
];
