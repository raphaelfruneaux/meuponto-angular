import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth) {
    this.user = this._firebaseAuth.authState;
    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
      }
    });
  }

  isAuthenticated() {
    return Boolean(this.userDetails);
  }

  getCurrentUser() {
    return this.user.map(userData => userData.toJSON());
  }

  signInWithEmail(email, password): Observable<any> {
    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    );
    return Observable.fromPromise(
      this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    );
  }

  logout(): Observable<boolean> {
    return Observable.create(observer => {
      this._firebaseAuth.auth.signOut().then(
        data => {
          console.log(data);
          observer.next(Boolean(data));
        },
        error => {
          observer.error(error);
          observer.complete();
        }
      );
    });
  }
}
