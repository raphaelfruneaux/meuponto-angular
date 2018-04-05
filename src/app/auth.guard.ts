import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  private abortNavigate(next?: string) {
    this.router.navigate(['auth/sign-in'], {
      queryParams: {
        next: next
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.isAuthenticated().map(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      }
      this.abortNavigate(state.url);
      return false;
    });
  }
}
