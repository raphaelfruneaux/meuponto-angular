import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private currentUser: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth) {
    this.user = this._firebaseAuth.authState;
    this.user.subscribe(user => {
      this.currentUser = user || null;
    });
  }

  isAuthenticated() {
    return Boolean(this.currentUser);
  }

  signInWithEmail(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    );
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): Observable<boolean> {
    return Observable.create(observer => {
      this._firebaseAuth.auth.signOut().then(
        res => {
          console.log(res);
          observer.next(Boolean(res));
        },
        error => {
          observer.error(error);
          observer.complete();
        }
      );
    });
  }
}
