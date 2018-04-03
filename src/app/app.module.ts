import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from './../environments/environment';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { AuthLayoutComponent } from './core/auth/auth-layout.component';

import { ErrorModule } from './error/';


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'meuponto'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
