import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = this._firebaseAuth.authState;
    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
      }
    });
  }

  getCurrentUser(): Observable<firebase.User> {
    return this.user.map(userDetails => {
      if (userDetails) {
        return userDetails.toJSON() as firebase.User;
      }
      return null;
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.getCurrentUser().map(userDetails => {
      return !!userDetails;
    });
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
          this.router.navigate(['auth/sign-in']);
          observer.next(Boolean(data));
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
