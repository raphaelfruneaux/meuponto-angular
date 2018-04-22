import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RequestPassowrdComponent } from './request-passowrd/request-passowrd.component';
import { RecoveryPassowrdComponent } from './recovery-passowrd/recovery-passowrd.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
      { path: 'login', component: SigninComponent },
      { path: 'cadastrar', component: SignupComponent },
      { path: 'request-password', component: RequestPassowrdComponent },
      { path: 'recovery-password', component: RecoveryPassowrdComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
