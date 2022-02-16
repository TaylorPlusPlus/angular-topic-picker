import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { GetApiService } from "./get-api.service";

@Injectable()
export class Account{


  accounts : {frontEndTopic:string, backEndTopic:string, devOpsTopic:string} [];

  FrontEndTopics: string[] = ['First', 'Second'];
  BackEndTopics: string[];
  DevOpsTopics: string[];

  constructor(private api : GetApiService )
  {

  }

  callPostNewTopic(TopicName: any, Type:any, CallBack : Function)
  {
    this.api.postNewTopic(TopicName, Type, CallBack);
  }

  fillAllTopics(): any{
    this.api.apiGetAllTopics().subscribe((data:any) =>{

      data.frontEndTopics.forEach(element => {
        this.FrontEndTopics.push(element);
        console.log(this.FrontEndTopics);
      });
      this.FrontEndTopics = data.frontEndTopics;
      this.BackEndTopics = data.backEndTopics;
      this.DevOpsTopics = data.backEndTopics;
      console.log(this.FrontEndTopics);

      return this.FrontEndTopics;
    })

  }

  onAccountAdded() {
    this.accounts = [];
    this.api.apiCall().subscribe((data:any) => {

        this.accounts.push({frontEndTopic: data.frontEndTopic,
           backEndTopic: data.backEndTopic,
           devOpsTopic: data.devOpsTopic});

    });
  }

}
