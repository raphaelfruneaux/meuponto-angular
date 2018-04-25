import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SigninComponent implements OnInit {
  error: string = '';
  loading: boolean = false;
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signIn() {
    this.loading = true;
    this.authService.signin(this.email, this.password)
    .then(() => {
      this.router.navigate(['']);
    })
    .catch(error => {
      this.loading = false;
      console.log(error);
      switch (error.code) {
        case 'auth/wrong-password':
          this.error = 'Ops! O email ou a senha que você digitou estão incorretos.';
          break;
        case 'auth/invalid-email':
          this.error = 'Você precisa colocar um email válido. ex: email@email.com';
          break;
        default:
          this.error = error.message;
          break;
      }
    });
  }
}
