import { AccountService } from './../../account.service';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-idx-account',
  templateUrl: './idx-account.component.html',
  styleUrls: ['./idx-account.component.scss']
})
export class IdxAccountComponent implements OnInit {

  accounts: Account[];
  subscription: Subscription;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.refreshAccount();
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  refreshAccount() {
    this.subscription = this.accountService.getAccounts().subscribe(data => {
      console.log(data);
      this.accounts = data;
    })
  }

  onDeleteAccount(id: number) {
    this.subscription = this.accountService.deleteCourse(id).subscribe((data : Account) => {
      this.updateDataAfterDelete(id);
    }); 
  }

  updateDataAfterDelete(id : number) {
    for (var i = 0; i < this.accounts.length; i++) {
      if(this.accounts[i].id == id) {
        this.accounts.splice(i, 1);
        break;
      }
    }
  }

}
