import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('destroy: sesons');
  }
}
