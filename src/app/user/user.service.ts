import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { AuthService } from './../auth/auth.service';

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
    const entries = this.db.list(`${this.endpoint}/${this._authUser.uid}/registros`).valueChanges();
    entries.subscribe(data => {
      console.log(data);
    });
  }

  todayEntry() {
    const entries = this.db
      .list(
        `${this.endpoint}/${this._authUser.uid}/registros`,
        ref => ref.orderByChild('date').equalTo('2018-04-22')
      ).valueChanges();

    entries.subscribe(data => {
      console.log(data);
    });
  }

}
