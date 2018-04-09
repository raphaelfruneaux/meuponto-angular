import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { ProfileComponent } from './profile/profile.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const COMPONENTS = [ProfileComponent, ToolbarComponent];

@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class UserModule {}
