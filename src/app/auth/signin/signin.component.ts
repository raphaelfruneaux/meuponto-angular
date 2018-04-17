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
  email: string;
  password: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signIn() {
    this.authService.signin(this.email, this.password);
  }
}
