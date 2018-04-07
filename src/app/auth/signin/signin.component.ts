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
  public email: string;
  public password: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signIn() {
    this.authService.signin(this.email, this.password);
  }
}
