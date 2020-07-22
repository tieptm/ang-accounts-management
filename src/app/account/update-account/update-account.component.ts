import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account';
import { AccountService } from 'src/app/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss']
})
export class UpdateAccountComponent implements OnInit {

  userNamePattern = /^[a-z]{8,8}$/i;
  emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  account = new Account();

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  updateAccount() {
    this.accountService.updateAccount(this.account).subscribe(data => {
      console.log(data);
      this.router.navigate(['/accounts'])
    });
  }

}
