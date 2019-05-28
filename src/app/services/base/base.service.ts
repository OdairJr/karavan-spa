import { ErrorModel } from './../../models/error.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private API_PATH = 'https://localhost:44368';

  public listErrors: Subject<ErrorModel> = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  public post(url: string, body?: object): Observable<any> {
    return new Observable<any>((retorno: Subscriber<any>) => {
      this.http.post(this.API_PATH + url, body).subscribe((resp: any) => {
        retorno.next(resp.data);
        retorno.complete();
      }, (response) => {
        const errorModel: ErrorModel = response.error;

        if (!errorModel.success && errorModel.errors.length > 0) {
          this.listErrors.next(errorModel);
        }
        retorno.error(response.error);
      });
    });
  }
}
