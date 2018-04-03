import { Routes } from '@angular/router';

import { Error404Component } from './error404/error404.component';

export const ErrorRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '404', component: Error404Component }
    ]
  }
];
