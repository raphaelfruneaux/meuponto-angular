import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';

import { UserModule } from '../user';

const COMPONENTS = [HeaderComponent, SidebarComponent, CardComponent];

@NgModule({
  imports: [
    CommonModule,
    UserModule
  ],
  declarations: [COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [COMPONENTS]
})
export class SharedModule {}
