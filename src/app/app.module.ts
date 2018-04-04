import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from './../environments/environment';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { ErrorModule } from './error';
import { AppLayoutComponent, AuthLayoutComponent } from './core';
import { AuthGuard, AuthService } from './auth';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'meuponto'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
