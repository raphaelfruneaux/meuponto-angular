import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { UserInfo } from 'firebase';
import { Md5 } from 'ts-md5/dist/md5';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  showUserDropdown = false;
  user: Observable<UserInfo>;
  gravatarUrl: SafeStyle;

  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.user.subscribe(data => {
      this.gravatarUrl = this.sanitizer
        .bypassSecurityTrustStyle(
          `url('https://www.gravatar.com/avatar/${Md5.hashStr(data.email)}?s=100&d=mm')`
        );
    });
  }

  logout() {
    this.authService.logout();
  }
}
