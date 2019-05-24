import { BaseService } from './../../../services/base/base.service';
import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-error-panel',
  templateUrl: './error-panel.component.html',
  styleUrls: ['./error-panel.component.css']
})
export class ErrorPanelComponent implements OnInit {

  private messages: Array<string> = new Array<string>();

  constructor(
    public baseService: BaseService
  ) { }

  ngOnInit() {
    this.baseService.listErrors.subscribe(errorModel => {
      this.messages = [];
      if (!isNullOrUndefined(errorModel) && errorModel.errors.length > 0) {
        errorModel.errors.forEach(error => {
          if (isNullOrUndefined(error.propertyName) || error.propertyName === '') {
            this.messages.push(error.errorMessage);
          }
        });
      }
    });
  }
}
