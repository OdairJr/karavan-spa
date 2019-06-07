import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Team } from 'src/app/models/team.model';
import { SuccessModel } from 'src/app/models/success.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(
    private http: HttpClient
  ) {
  }

  create(team: Team): Observable<SuccessModel> {
    return this.http.post('https://localhost:5001/api/team', team)
      .pipe(map((res: SuccessModel) => res));
  }

  getAll(): Observable<Array<Team>> {
    return this.http.get('https://localhost:5001/api/team')
      .pipe(map((res: Array<Team>) => res));
  }
}
