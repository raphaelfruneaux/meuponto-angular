import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './core/auth/auth-layout.component';
import { Error404Component } from './error/';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule'
    }]
  },
  { path: '**', component: Error404Component }
];
