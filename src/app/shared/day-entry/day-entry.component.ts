import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  OnDestroy
} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DayEntry } from './day-entry.interface';

@Component({
  selector: 'app-day-entry',
  templateUrl: './day-entry.component.html',
  styleUrls: ['./day-entry.component.scss']
})
export class DayEntryComponent implements OnInit, OnDestroy {
  @Input() today: boolean;
  @Input() entry: Observable<DayEntry>;
  private _entry: DayEntry;

  constructor() {}

  ngOnInit(): void {
    if (this.entry) {
      this.entry.subscribe(data => {
        this._entry = data;
        this._entry.dateEntry = new Date(
          data.date.toString().replace(/-/g, '/')
        );
      });
    }
  }

  ngOnDestroy(): void {
    console.log('destroy: day entry');
  }

  isToday(): boolean {
    const date = new Date();
    const dateCompare = date.toISOString().match(/\d{4}-\d{2}-\d{2}/).join('-');
    return !!this.today || (this._entry && this._entry.date === dateCompare);
  }

  isHoliday(): boolean {
    return this._entry && this._entry.feriado;
  }

  isWeekend(): boolean {
    return (
      this._entry &&
      (this._entry.dateEntry.getDay() === 0 ||
        this._entry.dateEntry.getDay() === 6)
    );
  }
}
