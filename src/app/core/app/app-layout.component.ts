import { Component, ViewContainerRef, OnInit } from '@angular/core';

import { ToastsManager, Toast } from 'ng2-toastr';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(userDetails => {
      if (!userDetails.emailVerified) {
        this.toastr.warning('Your email is not verified!');
      }

      if (!userDetails.displayName) {
        this.toastr.info('Hey, tell us your name!');
      }
    });
  }
}
