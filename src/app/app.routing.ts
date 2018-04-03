import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule'
    }, {
      path: 'error',
      loadChildren: './error/error.module#ErrorModule'
    }]
  },
  { path: '**', redirectTo: 'error/404' }
];
