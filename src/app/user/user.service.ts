import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { AuthService } from './../auth/auth.service';
import { DayEntry } from './../shared/day-entry/day-entry.interface';

@Injectable()
export class UserService {
  private endpoint = '/users';
  private _date: Date;
  private _authUser: firebase.User = null;
  private _user: AngularFireObject<any>;
  private user: Observable<any>;

  details: Observable<any>;

  constructor(private db: AngularFireDatabase, private auth: AuthService) {
    this._date = new Date();
    if (!this._authUser || !this._user) {
      this.auth.getCurrentUser().subscribe(user => {
        if (user) {
          this._authUser = user;
          this._user = this.db.object(`${this.endpoint}/${this._authUser.uid}`);
          this.user = this._user.valueChanges();
        }
      });
    }
  }

  private get date (): string {
    const day = this._date.getDate();
    const year = this._date.getFullYear();
    const _month = this._date.getMonth() + 1;
    const month = _month < 10 ? `0${_month}` : _month;

    return `${year}-${month}-${day}`;
  }

  currentUser() {
    return this._user.valueChanges();
  }

  authenticatedUser() {
    return this._authUser;
  }

  entries() {
    return this.db
      .list(`${this.endpoint}/${this._authUser.uid}/registros`)
      .valueChanges();
  }

  todayEntry(): Observable<DayEntry> {
    const todayEntry$ = this.db
      .list(`${this.endpoint}/${this._authUser.uid}/registros`, ref =>
        ref.orderByChild('date').equalTo(this.date)
      )
      .valueChanges();

    return Observable.create(observer => {
      todayEntry$.subscribe(
        data => {
          if (!data || data.length < 1) {
            Observable.throw('no content');
            return;
          }
          observer.next(data[0] as DayEntry);
          observer.complete();
        },
        error => {
          observer.error(error);
          observer.complete();
        }
      );
    });
  }
}
