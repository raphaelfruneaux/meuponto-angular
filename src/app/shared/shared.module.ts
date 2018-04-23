import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';

import { UserModule } from '../user';
import { TimelineComponent } from './timeline/timeline.component';
import { DayEntryComponent } from './day-entry/day-entry.component';
import { TimespotComponent } from './timeline/timespot/timespot.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonItemComponent } from './seasons/season-item/season-item.component';

const COMPONENTS = [
  HeaderComponent, SidebarComponent, CardComponent,
  DayEntryComponent, SeasonsComponent, SeasonItemComponent,
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
