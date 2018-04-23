import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DayEntry } from './day-entry.interface';


@Component({
  selector: 'app-day-entry',
  templateUrl: './day-entry.component.html',
  styleUrls: ['./day-entry.component.scss']
})
export class DayEntryComponent implements OnInit {

  @Input() entry: Observable<DayEntry>;

  constructor() { }

  ngOnInit() {}

}
