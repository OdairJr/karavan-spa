import { ErrorModel } from './../../models/error.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private API_PATH = 'https://localhost:44368';

  public listErrors: BehaviorSubject<ErrorModel> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  public post(url: string, body?: object): Observable<any> {
    return new Observable<any>((retorno: Subscriber<any>) => {
      this.http.post(this.API_PATH + url, body).subscribe((resp) => {
        retorno.next(resp);
        retorno.complete();
      }, (response) => {
        const errorModel: ErrorModel = response.error;

        if (!errorModel.success && errorModel.errors.length > 0) {
          this.listErrors.next(errorModel);
        }
        retorno.error(response);
      });
    });
  }

  public addError() {
    const error = new ErrorModel();

    error.success = false;
    error.errors.push({
      errorMessage: 'Erro',
      propertyName: 'email'
    }, {
        errorMessage: 'Erro 2',
        propertyName: ''
      });

    this.listErrors.next(error);
  }
}
