import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { AuthService } from './../auth/auth.service';

@Injectable()
export class UserService {

  private endpoint = 'users';
  private _user: firebase.User = null;

  details: Observable<any>;

  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService
  ) {
    if (!this._user) {
      this.auth.getCurrentUser().subscribe(user => {
        this._user = user;
      });
    }
  }

  getCurrentUser(): firebase.User {
    return this._user;
  }

  getDetails() {
    this.details = this.db.object(`${this.endpoint}/${this._user.uid}`).valueChanges();
    this.details.subscribe(data => {
      console.log(data);
    });
  }

}
