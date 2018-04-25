import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { UserService } from '../../user/user.service';
import { DayEntry } from '../../shared/day-entry/day-entry.interface';
import { Season } from '../../shared/seasons/season.interface';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppLayoutComponent implements OnInit, OnDestroy {

  initialDate: string;
  todayEntry: Observable<DayEntry>;
  season: Season;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.initialDate = this.userService.date;
  }

  ngOnInit(): void {
    this.todayEntry = this.userService.todayEntry();
  }

  ngOnDestroy(): void {
    console.log('destroy: app layout');
  }

  seasonSelected(season: Season): void {
    this.season = season;
  }
}
