import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import { LoginComponent } from '../auth/login';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  routerStateSnapshot: RouterStateSnapshot;
  chosenDate: Date;
  bays: Observable<any>;

  futureDatesOnly = (d: Date): boolean => {
    const day = d.getDay();
    return moment(Date.now()).diff(d, 'days') < 1 && day !== 0 && day !== 6;
  }

  constructor(private db: AngularFireDatabase, private router: Router, public dialog: MdDialog) { }

  ngOnInit() {
    this.routerStateSnapshot = this.router.routerState.snapshot;
    this.chosenDate = new Date();
  }

  // ToDo refactor
  isUserLoggedIn(): boolean {
    localStorage.setItem('redirect', this.routerStateSnapshot.url);
    if (!localStorage.getItem('currentUserId')) {
      this.dialog.open(LoginComponent);
    }
    return true;
  }

  search() {
    if (this.isUserLoggedIn()) {
      this.bays = this.db.list(`/bays/`, {
        query: {
          orderByChild: moment(this.chosenDate).format('ddd'),
          equalTo: true,
        },
      }).map((_bays) => _bays.filter((bay) => !bay.booked[moment(this.chosenDate).format('YYMMDD')]));
    }
  }

  book(bay: any) {
    const booking = moment(this.chosenDate).format('YYMMDD');
    this.db.object(`/bays/${bay.$key}/booked/${booking}`).set(true);
  }
}
