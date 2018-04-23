import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';

import { UserModule } from '../user';
import { TimelineComponent } from './timeline/timeline.component';
import { DayEntryComponent } from './day-entry/day-entry.component';
import { TimespotComponent } from './timeline/timespot/timespot.component';

const COMPONENTS = [
  HeaderComponent, SidebarComponent, CardComponent,
  DayEntryComponent,
  TimelineComponent, TimespotComponent
];

@NgModule({
  imports: [
    CommonModule,
    UserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class SharedModule {}
