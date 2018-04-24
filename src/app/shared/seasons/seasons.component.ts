import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeasonService } from './season.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit, OnDestroy {

  constructor(
    private seasonService: SeasonService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('destroy: sesons');
  }
}
