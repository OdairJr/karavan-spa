import { Observable } from 'rxjs';
import { BaseService } from './../base/base.service';
import { Injectable } from '@angular/core';
import { User, Login } from 'src/app/models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private baseService: BaseService
  ) {
  }

  signUp(user: User): Observable<User> {
    return this.baseService.post('/api/account/register', user)
      .pipe(map((res: User) => res));
  }

  login(loginModel: Login) {
    this.baseService.post('/api/account/login', loginModel).subscribe(response => {

    });
  }
}
