import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({
          transform: 'translateX(6%)',
          opacity: 0
        }),
        animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class SignupComponent implements OnInit {
  state: string;
  error: string = '';
  loading: boolean = false;
  public name: string;
  public email: string;
  public password: string;
  public password2: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.state = 'in';
  }

  ngOnInit() {}

  signUp() {
    this.loading = true;
    this.authService.signup(this.email, this.password).subscribe(
      user => {
        this.router.navigate(['']);
      },
      error => {
        this.loading = false;
        console.log(error);
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.error = 'Ops! Este email já possui conta no meuPonto.';
            break;
          case 'auth/invalid-email':
            this.error = 'Você precisa colocar um email válido. ex: email@email.com';
            break;
          default:
            this.error = error.message;
            break;
        }
      }
    );
  }

  ngOnDestroy() {
    this.state = 'out';
  }
}
