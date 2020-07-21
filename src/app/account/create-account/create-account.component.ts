import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  userNamePattern = /^[a-z]{8,8}$/i;
  emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void {
    console.log(form);
  }
}
