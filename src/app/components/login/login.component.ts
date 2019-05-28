import { Login } from './../../models/user.model';
import { AccountService } from './../../services/account/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginModel: Login = new Login();

  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }

  onSubmit() {
    this.accountService.login(this.loginModel);
  }
}
