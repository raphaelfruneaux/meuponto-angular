import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { SeasonService } from './season.service';
import { Season } from './season.interface';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit, OnDestroy {

  @Input() initialDatePrefix: string;
  @Output() whenSelected = new EventEmitter();
  seasons: Season[] = [];

  constructor(
    private seasonService: SeasonService
  ) {}

  ngOnInit(): void {
    this.seasons = this.seasonService.getAll();
    console.log(this.initialDatePrefix);
  }

  ngOnDestroy(): void {
    console.log('destroy: sesons');
  }

  handleClick(season: Season): void {
    console.log('season item has been clicked!');
    this.whenSelected.emit(season);
  }
}
