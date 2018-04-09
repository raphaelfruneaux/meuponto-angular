import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-request-passowrd',
  templateUrl: './request-passowrd.component.html',
  styleUrls: ['./request-passowrd.component.scss']
})
export class RequestPassowrdComponent implements OnInit {
  email: string;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {}

  requestPassword() {
    this.authService.requestPassword(this.email);
  }

}
