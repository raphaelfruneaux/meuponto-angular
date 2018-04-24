import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
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

  constructor(private seasonService: SeasonService) {
    this.seasonService.getAllObservables().subscribe(seasons => {
      this.seasons = seasons;
    });
  }

  ngOnInit(): void {
    // this.seasons = this.seasonService.getAll();
    this.seasonService.getAllObservables().subscribe(seasons => {
      this.seasons = seasons;

      console.log(this.initialDatePrefix);

      if (this.initialDatePrefix) {
        const season = this.seasons.filter((s: Season) => {
          console.log(s.datePrefix);
          return s.datePrefix === this.initialDatePrefix;
        });

        if (season && season.length > 0) {
          console.log(season);
          this.whenSelected.emit(season);
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
