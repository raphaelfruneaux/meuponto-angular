import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Season } from '../season.interface';

@Component({
  selector: 'app-season-item',
  templateUrl: './season-item.component.html',
  styleUrls: ['./season-item.component.scss']
})
export class SeasonItemComponent implements OnInit, OnDestroy {

  @Input() season: Season;

  constructor() { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('destroy: season item');
    this.season = null;
  }

  isSelected(): boolean {
    return this.season && this.season.selected;
  }

  isPositive(): boolean {
    return !true;
  }

  isNegative(): boolean {
    return false;
  }

}
