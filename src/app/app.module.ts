import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MaterialModule,
  MdButtonModule,
  MdDatepickerModule,
  MdDialog,
  MdIconRegistry,
  MdInputModule,
  MdMenuModule,
  MdNativeDateModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthGuard } from './auth/auth-guard.service';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginComponent } from './auth/login';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home';
import { LeaseMyBayComponent } from './lease-my-bay/lease-my-bay.component';
import { PageNotFoundComponent } from './page.not.found';
import { RentComponent } from './rent/rent.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyD66yjWURXlHnep9WdKNOZl3B_0IUfOIY4',
  authDomain: 'parkfinity-prod.firebaseapp.com',
  databaseURL: 'https://parkfinity-prod.firebaseio.com',
  projectId: 'parkfinity-prod',
  storageBucket: 'parkfinity-prod.appspot.com',
  messagingSenderId: '60132710348',
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelpComponent,
    HomeComponent,
    FeedbackDialogComponent,
    PageNotFoundComponent,
    LeaseMyBayComponent,
    RentComponent,
    BankAccountComponent,
    BookingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    MdInputModule,
    MdToolbarModule,
    MdButtonModule,
    MdMenuModule,
    MdTooltipModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdDatepickerModule,
    MdNativeDateModule,
  ],
  providers: [
    AuthGuard,
    MdIconRegistry,
    MdDialog,
  ],
  entryComponents: [FeedbackDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
