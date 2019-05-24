import { BaseService } from './../base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private baseService: BaseService
  ) {
  }

  signup() {
    this.baseService.post('/api/account/register', {}).subscribe(response => {

    });
  }
}
