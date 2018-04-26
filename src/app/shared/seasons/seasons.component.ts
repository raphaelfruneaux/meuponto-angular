import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { SeasonService } from './season.service';
import { Season } from './season.interface';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit, OnDestroy {
  @Input() initialDate: string;
  @Output() whenSelected = new EventEmitter();
  seasons$: Observable<Season[]>;

  constructor(private seasonService: SeasonService) {
    this.seasons$ = this.seasonService.getAllObservables();
  }

  ngOnInit(): void {
    this.seasons$.subscribe(seasons => {
      if (this.initialDate) {
        const season = seasons.filter((s: Season) => {
          return s.datePrefix === this.initialDate;
        });

        if (season && season.length > 0) {
          this.whenSelected.emit(season[0]);
        }
      }
    });
  }

  ngOnDestroy(): void {
    console.log('destroy: sesons');
  }

  handleClick(season: Season): void {
    console.log('season item has been clicked!');
    this.whenSelected.emit(season);
  }
}
