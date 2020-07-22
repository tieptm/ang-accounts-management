import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/account.service';
import { Account } from 'src/app/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  userNamePattern = /^[a-z]{8,8}$/i;
  emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  account = new Account();

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void {
    console.log(form);
  }

  createAccount() {
    this.accountService.postAccount(this.account).subscribe(data => {
      console.log(data);
      this.router.navigate(['/accounts'])
    });
  }
}
