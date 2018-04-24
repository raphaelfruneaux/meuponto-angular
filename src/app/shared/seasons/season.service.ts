import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { AuthService } from '../../auth/auth.service';

@Injectable()
export class SeasonService {

  private _authUser: firebase.User = null;
  private entries$;
  private entries;
  private seasons = [];

  constructor(private db: AngularFireDatabase, private auth: AuthService) {
    this.auth.getCurrentUser().subscribe(user => {
      if (user) {
        this._authUser = user;
        this.entries$ = this.db.list(`/users/${user.uid}/registros`);
        this.entries$.valueChanges().subscribe(data => {
          this.entries = data;
        });
      }
    });
  }

  getAll() {
    return this.seasons;
  }

}
