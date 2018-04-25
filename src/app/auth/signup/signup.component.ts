import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  error: string = '';
  loading: boolean = false;
  public name: string;
  public email: string;
  public password: string;
  public password2: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

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
}
