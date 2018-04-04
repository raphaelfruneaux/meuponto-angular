import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthService } from '../auth.service';

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

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  signIn() {}

  signInWithFacebook() {}

  signInWithTwitter() {}

  signInWithGithub() {}

  signInWithGoogle() {}
}
