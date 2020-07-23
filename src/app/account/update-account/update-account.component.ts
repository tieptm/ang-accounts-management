import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account';
import { AccountService } from 'src/app/account.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss']
})
export class UpdateAccountComponent implements OnInit {

  public userNamePattern = /^[a-z]{8,8}$/i;
  public emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

  public subscription: Subscription;
  public subscriptionParams: Subscription;
  public account: Account
  
  constructor(
    private accountService: AccountService, 
    private router: Router,
    public activatedRouteService: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.account = new Account();
    this.loadDataAccount();
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    if(this.subscriptionParams) {
      this.subscription.unsubscribe();
    }
  }

  updateAccount() {
    this.accountService.updateAccount(this.account).subscribe(data => {
      console.log(data);
      this.router.navigate(['/accounts'])
    });
  }

  loadDataAccount() {
    this.subscriptionParams = this.activatedRouteService.params.subscribe((data : Params) => {
      this.subscription = this.accountService.getAccount(data['id']).subscribe((account : Account) => {
        this.account = account;
        console.log(account);
      });
    });
  }

}
