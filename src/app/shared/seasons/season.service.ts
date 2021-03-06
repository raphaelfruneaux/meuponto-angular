import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { AuthService } from '../../auth/auth.service';
import { DayEntry } from '../day-entry/day-entry.interface';

import { Season, SeasonPeriod, SeasonPeriodDate } from './season.interface';

@Injectable()
export class SeasonService {
  private _authUser: firebase.User = null;
  private entries$;
  private entries;
  private seasons: Season[] = [];
  private currentSeason: Season;

  constructor(private db: AngularFireDatabase, private auth: AuthService) {
    this.auth.getCurrentUser().subscribe(user => {
      if (user) {
        this._authUser = user;
        this.entries$ = this.db.list(`/users/${user.uid}/registros`);
        this.entries$.valueChanges().subscribe(data => {
          this.entries = data;
          this.loadSeasons();
        });
      }
    });
  }

  getAll(): Season[] {
    return this.seasons;
  }

  getAllObservables(): Observable<Season[]> {
    return Observable.create(observer => {
      observer.next(this.seasons);
      observer.complete();
    });
  }

  loadSeasons() {
    const date = new Date();
    this.entries.forEach((entry: DayEntry) => {
      entry.dateEntry = new Date(entry.date.replace(/-/g, '/'));

      const _month = entry.dateEntry.getMonth() + 1;
      const month = _month < 10 ? `0${_month}` : _month;

      entry.datePrefix = `${entry.dateEntry.getFullYear()}-${month}`;

      const hasEntry = !!this.seasons.filter((season: Season) => {
        return season.datePrefix === entry.datePrefix;
      }).length;

      if (!hasEntry) {
        const season = this.createSeason(entry);
        this.seasons.push(season);
      }
    });
  }

  createSeason(entry: DayEntry, period?: SeasonPeriod): Season {
    const seasonPeriod = period ? period : this.createSeasonPeriod(entry.dateEntry);
    const season: Season = {
      date: new Date(
        entry.dateEntry.getUTCFullYear(),
        entry.dateEntry.getMonth(),
        1
      ),
      datePrefix: entry.datePrefix,
      period: seasonPeriod
    };
    return season;
  }

  createSeasonPeriod(dateRef: Date): SeasonPeriod {
    const seasonPeriod: SeasonPeriod = {
      startIn: new Date(
        dateRef.getFullYear(),
        dateRef.getMonth(),
        SeasonPeriodDate.start
      ),
      endIn: new Date(
        dateRef.getFullYear(),
        dateRef.getMonth() + 1,
        SeasonPeriodDate.end
      )
    };
    return seasonPeriod;
  }

}
