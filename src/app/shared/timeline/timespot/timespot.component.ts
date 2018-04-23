import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DayEntry } from '../../day-entry/day-entry.interface';

@Component({
  selector: 'app-timespot',
  templateUrl: './timespot.component.html',
  styleUrls: ['./timespot.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimespotComponent implements OnInit {

  @Input() entry: Observable<DayEntry>;
  @Input() spot;

  constructor() { }

  ngOnInit() {}

}
