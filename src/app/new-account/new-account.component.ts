import { Component, EventEmitter, Output } from '@angular/core';
import { Logging } from '../logging.service';
import { Account } from '../account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [Logging]
})
export class NewAccountComponent {

  @Output() serverAdded = new EventEmitter<{}>();
  constructor(private logging : Logging, private account: Account){}



  onAddTopic(TopicName: any, Type:any)
  {
    this.account.callPostNewTopic(TopicName,Type, ()=>{
      this.serverAdded.emit();
    });
    console.log( TopicName.value + " " + Type.value);
  }

  /*
  Will be turned into a generate topics button
  onCreateAccount() {

    this.account.onAccountAdded();
    this.serverAdded.emit();
  }
  */
}
