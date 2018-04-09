import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private _authState: Observable<firebase.User> = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
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
    this._firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['']);
      })
      .catch(error => {
        console.warn(error);
      });
  }

  signup(email: string, password: string) {
    return Observable.fromPromise(
      this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }

  requestPassword(email: string) {
    this._firebaseAuth.auth.sendPasswordResetEmail(email).then((data) => {
      console.log(data);
    });
  }

  logout(): void {
    this._firebaseAuth.auth.signOut().then(() => {
      this.router.navigate(['auth/sign-in']);
    });
  }
}
