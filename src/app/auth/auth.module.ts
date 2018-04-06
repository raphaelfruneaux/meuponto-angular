import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthRoutes } from './auth.routing';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';


const COMPONENTS = [
  AuthComponent, SigninComponent, SignupComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthRoutes),
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [COMPONENTS],
  providers: [AuthService]
})
export class AuthModule { }
