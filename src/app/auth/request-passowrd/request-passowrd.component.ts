import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-passowrd',
  templateUrl: './request-passowrd.component.html',
  styleUrls: ['./request-passowrd.component.scss']
})
export class RequestPassowrdComponent implements OnInit {
  error: string = '';
  loading: boolean = false;
  email: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  requestPassword() {
    this.loading = true;
    this.authService.requestPassword(this.email)
    .then(() => {
      this.router.navigate(['']);
    })
    .catch(error => {
      this.loading = false;
      console.log(error);
      switch (error.code) {
        case 'auth/invalid-email':
          this.error = 'Você precisa colocar um email válido. ex: email@email.com';
          break;
        default:
          this.error = error.message;
          break;
      }
    });
  }

}
