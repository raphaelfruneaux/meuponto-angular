import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth.routing.module';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RequestPassowrdComponent } from './request-passowrd/request-passowrd.component';
import { RecoveryPassowrdComponent } from './recovery-passowrd/recovery-passowrd.component';

import { SharedModule } from '../shared/shared.module';


const COMPONENTS = [
  AuthComponent, SigninComponent, SignupComponent, RequestPassowrdComponent, RecoveryPassowrdComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [COMPONENTS],
  providers: [AuthService]
})
export class AuthModule { }
