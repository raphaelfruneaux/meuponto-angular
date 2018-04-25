import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

export enum URL {
  LOGIN = 'login'
}

@Injectable()
export class AuthService {
  private _authState: Observable<firebase.User> = null;

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private router: Router
  ) {
    this._authState = this._firebaseAuth.authState;
  }

  getCurrentUser(): Observable<firebase.User> {
    return this._authState.map(user => {
      if (user) {
        return user.toJSON() as firebase.User;
      }
      return null;
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.getCurrentUser().map(userDetails => {
      return !!userDetails;
    });
  }

  signin(email, password) {
    return this._firebaseAuth.auth
      .signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return Observable.fromPromise(
      this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }

  requestPassword(email: string) {
    return this._firebaseAuth.auth.sendPasswordResetEmail(email);
  }

  logout(): void {
    this._firebaseAuth.auth.signOut().then(() => {
      this.router.navigate([URL.LOGIN]);
    });
  }
}
