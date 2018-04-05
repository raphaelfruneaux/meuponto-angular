import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public user = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  signIn() {
    this.authService
      .signInWithEmail(this.user.email, this.user.password)
      .subscribe(
        data => {
          this.router.navigate(['']);
        },
        error => {
          console.log(error);
        }
      );
  }

  signInWithFacebook() {}

  signInWithTwitter() {}

  signInWithGithub() {}

  signInWithGoogle() {}
}
