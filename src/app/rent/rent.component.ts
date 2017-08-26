import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  chosenDate: Date;
  bays: Observable<any>;

  futureDatesOnly = (d: Date): boolean => {
    const day = d.getDay();
    return moment(Date.now()).diff(d, 'days') < 1 && day !== 0 && day !== 6;
  }

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  search() {
    this.bays = this.db.list(`/bays/`, {
      query: {
        orderByChild: 'mon',
        equalTo: true,
      },
    }).map((_bays) => _bays.filter((bay) => !bay.booked[moment(this.chosenDate).format('YYMMDD')]));
  }

}
