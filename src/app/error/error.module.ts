import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorRoutes } from './error.routing';
import { Error404Component } from './error404/error404.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ErrorRoutes)
  ],
  declarations: [Error404Component]
})
export class ErrorModule { }
