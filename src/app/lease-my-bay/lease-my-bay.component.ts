import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-lease-my-bay',
  templateUrl: './lease-my-bay.component.html',
  styleUrls: ['./lease-my-bay.component.css'],
})
export class LeaseMyBayComponent implements OnInit {
  bay: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.bay = this.db.object(`/bays/${localStorage.getItem('currentUserId')}`);
  }

}
