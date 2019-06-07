import { ErrorService } from './../services/error/error.service';
import { AccountService } from './../services/account/account.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorModel } from '../models/error.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private accountService: AccountService,
    private errorService: ErrorService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.accountService.logout();
        location.reload(true);
      }

      const errorModel: ErrorModel = err.error;

      if (!errorModel.success && errorModel.errors.length > 0) {
        this.errorService.listErrors.next(errorModel);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}

