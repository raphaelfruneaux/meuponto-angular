import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  RouterModule,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { ToastOptions } from 'ng2-toastr';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from './../environments/environment';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

import { AppLayoutComponent, AuthLayoutComponent } from './core';
import { AuthModule, AuthService } from './auth';
import { ErrorModule } from './error';
import { SharedModule } from './shared';

export class ToastCustomOptions extends ToastOptions {
  animate = 'fade';
  showCloseButton = true;
}

@NgModule({
  declarations: [AppComponent, AppLayoutComponent, AuthLayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule.forRoot(),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'meuponto'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ErrorModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: ToastOptions, useClass: ToastCustomOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
