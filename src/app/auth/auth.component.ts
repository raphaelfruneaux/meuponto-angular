import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: '<div class="auth-container"><router-outlet></router-outlet></div>',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
