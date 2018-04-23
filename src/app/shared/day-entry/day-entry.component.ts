import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DayEntry } from './day-entry.interface';


@Component({
  selector: 'app-day-entry',
  templateUrl: './day-entry.component.html',
  styleUrls: ['./day-entry.component.scss']
})
export class DayEntryComponent implements OnInit {

  @Input() today: boolean;
  @Input() entry: Observable<DayEntry>;
  private _entry: DayEntry;

  constructor() { }

  ngOnInit() {
    console.log(this);

    if (this.entry) {
      this.entry.subscribe(data => {
        this._entry = data;
        this._entry.dateEntry = new Date(data.date.toString().replace(/-/g, '/'));
      });
    }
  }

  isToday() {
    return !!this.today;
  }

  isHoliday() {
    return this._entry && this._entry.feriado;
  }

  isWeekend() {
    return this._entry && (
      this._entry.dateEntry.getDay() === 0 ||
      this._entry.dateEntry.getDay() === 6
    );
  }



}
