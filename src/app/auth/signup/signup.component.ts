import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public name: string;
  public email: string;
  public password: string;
  public password2: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  signUp() {
    this.authService.signup(this.email, this.password).subscribe(
      user => {
        this.router.navigate(['']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
