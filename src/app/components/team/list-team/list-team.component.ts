import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {

  public teams: Array<Team> = new Array<Team>();

  constructor(
    private router: Router,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.teamService.getAll().subscribe(response => {
      this.teams = response;
    }, error => {});
  }

  goToCreate() {
    this.router.navigate(['/teams/create']);
  }
}
