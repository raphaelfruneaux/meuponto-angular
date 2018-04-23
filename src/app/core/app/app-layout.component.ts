import { Component, ViewContainerRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { ToastsManager, Toast } from 'ng2-toastr';

import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../user/user.service';
import { DayEntry } from '../../shared/day-entry/day-entry.interface';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppLayoutComponent implements OnInit {

  todayEntry: Observable<DayEntry>;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private router: Router
  ) {
    this.toastr.setRootViewContainerRef(vcr);
    this.toastr.onClickToast().subscribe((toast: Toast) => {
      if (toast.data && toast.data['url']) {
        this.router.navigate([toast.data['url']]);
        this.toastr.clearToast(toast);
      }
    });
  }

  ngOnInit(): void {
    this.todayEntry = this.userService.todayEntry();

    // this.authService.getCurrentUser().subscribe(userDetails => {
      // if (!userDetails.emailVerified) {
      //   this.toastr.warning('Your email is not verified!');
      // }

      // if (!userDetails.displayName) {
      //   this.toastr.info('Hey, tell us your name!', '', { data: { url: '/user/profile' }});
      // }
    // });
  }
}
