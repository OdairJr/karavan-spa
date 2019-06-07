import { Team } from './../../../models/team.model';
import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  public teamModel: Team = new Team();

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.teamService.create(this.teamModel).subscribe(response => {
      debugger;
    }, error => {
        debugger;
     });
  }

}
