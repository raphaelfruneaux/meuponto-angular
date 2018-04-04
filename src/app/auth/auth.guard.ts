import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('auth guard');
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['auth/sign-in'], {
      queryParams: {
        next: state.url
      }
    });
    return false;
  }
}
