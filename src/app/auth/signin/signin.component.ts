import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({
          transform: 'translateX(-6%)',
          opacity: 0
        }),
        animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          transform: 'translateX(100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class SigninComponent implements OnInit {
  state: string;
  error: string = '';
  loading: boolean = false;
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.state = 'in';
  }

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

  ngOnDestroy() {
    this.state = 'out';
  }
}
