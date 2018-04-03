import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthRoutes } from './auth.routing';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes)
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class AuthModule { }
