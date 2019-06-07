import { ErrorService } from './../../../services/error/error.service';
import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-error-panel',
  templateUrl: './error-panel.component.html',
  styleUrls: ['./error-panel.component.css']
})
export class ErrorPanelComponent implements OnInit {

  public messages: Array<string> = new Array<string>();

  constructor(
    public errorService: ErrorService
  ) { }

  ngOnInit() {
    this.errorService.listErrors.subscribe(errorModel => {
      this.messages = [];
      if (!isNullOrUndefined(errorModel) && errorModel.errors.length > 0) {
        errorModel.errors.forEach(error => {
          this.messages.push(error.errorMessage);
        });
      }
    });
  }
}
