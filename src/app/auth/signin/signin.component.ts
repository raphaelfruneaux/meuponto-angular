import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

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

  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit(): void {}

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  signInWithFacebook() {}
  signInWithTwitter() {}
  signInWithGithub() {}
  signInWithGoogle() {}
}
