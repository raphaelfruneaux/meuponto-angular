import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthRoutes } from './auth.routing';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthRoutes)
  ],
  declarations: [SigninComponent, SignupComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
