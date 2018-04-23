import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { DayEntry } from './../day-entry/day-entry.interface';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() entry: Observable<DayEntry>;

  constructor() { }

  ngOnInit() { }

}
