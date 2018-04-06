import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };

  constructor() { }

  ngOnInit() {
  }

  signUp() {}

}
