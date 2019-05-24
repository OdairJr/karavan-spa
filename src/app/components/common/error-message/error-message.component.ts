import { BaseService } from './../../../services/base/base.service';
import { Component, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() private propertyName: string;
  private messages: Array<string> = new Array<string>();

  constructor(
    public baseService: BaseService
  ) { }

  ngOnInit() {
    this.baseService.listErrors.subscribe(errorModel => {
      this.messages = [];
      if (!isNullOrUndefined(errorModel) && errorModel.errors.length > 0) {
        errorModel.errors.forEach(error => {
          if (error.propertyName === this.propertyName) {
            this.messages.push(error.errorMessage);
          }
        });
      }
    });
  }

}
