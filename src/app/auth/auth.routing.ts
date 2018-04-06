import { Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
      { path: 'sign-in', component: SigninComponent },
      { path: 'sign-up', component: SignupComponent }
    ]
  }
];
