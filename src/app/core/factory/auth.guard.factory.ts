import { Injector } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, AuthGuard } from '../auth';


export function AuthGuardFactory(
  router: Router,
  authService: AuthService
) {
  return new AuthGuard(router, authService);
}
