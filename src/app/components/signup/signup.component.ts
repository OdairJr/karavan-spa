import { BaseService } from './../../services/base/base.service';
import { AccountService } from './../../services/account/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private baseService: BaseService
  ) { }

  ngOnInit() {
    this.accountService.signup();
  }

  addError() {
    debugger;
    this.baseService.addError();
  }

}
