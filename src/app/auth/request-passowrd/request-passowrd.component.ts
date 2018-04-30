import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-request-passowrd',
  templateUrl: './request-passowrd.component.html',
  styleUrls: ['./request-passowrd.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({
          transform: 'translateX(6%)',
          opacity: 0
        }),
        animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class RequestPassowrdComponent implements OnInit {
  state: string;
  error: string = '';
  loading: boolean = false;
  email: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.state = 'in';
  }

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
