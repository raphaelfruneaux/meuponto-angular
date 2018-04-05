import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';

const COMPONENTS = [
  HeaderComponent, SidebarComponent, CardComponent
];

@NgModule({
  imports: [ CommonModule ],
  declarations: [ COMPONENTS ],
  exports: [ COMPONENTS, CommonModule ]
})
export class SharedModule { }
