import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeasonService } from './season.service';
import { Season } from './season.interface';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit, OnDestroy {

  seasons: Season[] = [];

  constructor(
    private seasonService: SeasonService
  ) {}

  ngOnInit(): void {
    this.seasons = this.seasonService.getAll();
  }

  ngOnDestroy(): void {
    console.log('destroy: sesons');
  }
}
