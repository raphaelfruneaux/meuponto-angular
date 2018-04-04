import { Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { Error404Component } from './error';
import { AppLayoutComponent, AuthLayoutComponent } from './core';


export const AppRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AppLayoutComponent
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'auth',
      loadChildren: 'app/auth/auth.module#AuthModule'
    }]
  },
  { path: '**', component: Error404Component }
];
