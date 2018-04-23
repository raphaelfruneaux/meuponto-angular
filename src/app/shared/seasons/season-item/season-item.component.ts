import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-season-item',
  templateUrl: './season-item.component.html',
  styleUrls: ['./season-item.component.scss']
})
export class SeasonItemComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('destroy: season item');
  }

  isPositive(): boolean {
    return true;
  }

  isNegative(): boolean {
    return false;
  }

}
