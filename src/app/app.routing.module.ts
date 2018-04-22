import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { Error404Component } from './error';
import { AppLayoutComponent, AuthLayoutComponent } from './core';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AppLayoutComponent,
    children: [{
      path: 'user',
      loadChildren: 'app/user/user.module#UserModule'
    }]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: '',
      loadChildren: 'app/auth/auth.module#AuthModule'
    }]
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
