import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { UserModule } from '../user';
import { TimelineComponent } from './timeline/timeline.component';
import { DayEntryComponent } from './day-entry/day-entry.component';
import { TimespotComponent } from './timeline/timespot/timespot.component';

import { SeasonService } from './seasons/season.service';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonItemComponent } from './seasons/season-item/season-item.component';
import { TextMaskModule } from 'angular2-text-mask';

const COMPONENTS = [
  HeaderComponent, SidebarComponent,
  DayEntryComponent, SeasonsComponent, SeasonItemComponent,
  TimelineComponent, TimespotComponent
];

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    FormsModule,
    TextMaskModule,
    NgbModule
  ],
  providers: [SeasonService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class SharedModule {}
