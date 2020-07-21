import { AccountService } from './../../account.service';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account';

@Component({
  selector: 'app-idx-account',
  templateUrl: './idx-account.component.html',
  styleUrls: ['./idx-account.component.scss']
})
export class IdxAccountComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.refreshAccount();
  }

  refreshAccount() {
    this.accountService.getAccounts().subscribe(data => {
      console.log(data);
      this.accounts = data;
    })
  }

}
