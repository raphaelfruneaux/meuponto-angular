import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { AuthService } from './../auth/auth.service';
import { DayEntry } from './../shared/day-entry/day-entry.interface';

@Injectable()
export class UserService {

  private endpoint = '/users';
  private _authUser: firebase.User = null;
  private _user: AngularFireObject<any>;
  private user: Observable<any>;

  details: Observable<any>;

  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService
  ) {
    if (!this._authUser || !this._user) {
      this.auth.getCurrentUser().subscribe(user => {
        this._authUser = user;
        this._user = this.db.object(`${this.endpoint}/${this._authUser.uid}`);
        this.user = this._user.valueChanges();
      });
    }
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
    const date = new Date();
    const today = date.toISOString().match(/\d{4}-\d{2}-\d{2}/).join('-');


    const todayEntry$ = this.db
      .list(
        `${this.endpoint}/${this._authUser.uid}/registros`,
        ref => ref.orderByChild('date').equalTo(today)
      ).valueChanges();

    return Observable.create(observer => {
      todayEntry$.subscribe(data => {
        if (!data || data.length < 1) {
          Observable.throw('no content');
          return;
        }
        observer.next(data[0] as DayEntry);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

}
