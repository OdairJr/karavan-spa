import { AccountService } from './../../services/account/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: User = new User();
  public confirmPassword: string;
  public isCreated = false;

  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/account/login']);
  }

  onSubmit() {
    this.accountService.signUp(this.user).subscribe(response => {
      this.isCreated = true;
    });
  }
}
