import { Component, ViewContainerRef, OnInit } from '@angular/core';

import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  constructor(private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit(): void {
    this.toastr.info('Just some information for you.');
  }
}
