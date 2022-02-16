import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Logging } from '../logging.service';
import { Account } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [Logging]
})
export class AccountComponent {

  constructor(private Logging : Logging, private incAccount : Account){}

  @Input() account: {frontEndTopic:string, backEndTopic:string, devOpsTopic:string   };


  onSetTo(status: string) {
    this.Logging.logStatus(status);
  }
}
