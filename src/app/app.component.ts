import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Account } from './account.service';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Account]
})
export class AppComponent {

  accounts : {frontEndTopic:string, backEndTopic:string, devOpsTopic:string} [];

  FrontEndTopics: string[];
  BackEndTopics: string[];
  DevOpsTopics: string[];
  AllTypes:any;

  constructor(private account : Account, private api : GetApiService )
  {
    this.accounts = account.accounts;
 //   this.AllTypes = this.account.fillAllTopics();
  //  console.log(this.AllTypes + "!!!!!!!");
  }

  ngOnInit(){
    this.updateTopics();
  }

  updateAccounts()
  {
    this.accounts = this.account.accounts;
    this.updateTopics();
  }

  updateTopics()
  {
    this.api.apiGetAllTopics().subscribe((data:any) =>{

      /*    data.frontEndTopics.forEach(element => {
            this.FrontEndTopics.push(element);
            console.log(this.FrontEndTopics);
          });
          */
          this.FrontEndTopics = data.frontEndTopics;
          this.BackEndTopics = data.backEndTopics;
          this.DevOpsTopics = data.devOpsTopics;
          console.log(data);

         // return this.FrontEndTopics;
        })
  }



}
