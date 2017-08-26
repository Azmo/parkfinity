import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css'],
})
export class BankAccountComponent implements OnInit {
  bankAccount: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.bankAccount = this.db.object(`/users/${localStorage.getItem('currentUserId')}/bankAccount`);
  }

}
