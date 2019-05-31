import { Team } from './../../../models/team.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  public teamModel: Team = new Team();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert('alo');
  }

}
