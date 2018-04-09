import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { UserInfo } from 'firebase';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public user: UserInfo;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
  }

}
