import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
 })
export class GetApiService {

  constructor( private http:HttpClient ){ }

  url:string= 'http://localhost:5004/TopicPicker/PostTopic';
  getAllUrl:string = 'http://localhost:5004/TopicPicker/GetAllTopics'

  apiCall()
  {
   // return this.http.get('http://localhost:5004/account/get/Faker@live.com');
   return this.http.get('http://localhost:5004/TopicPicker')
  }

  apiGetAllTopics()
  {
    return this.http.get(this.getAllUrl);
  }

  postNewTopic(TopicName :any, Type :any, callback : Function ) {

            {
                      console.log("Posting " + TopicName + " and " + Type );

                      this.http.post(this.url, {
                        TopicName:TopicName.value,
                        Type:Type.value,
                      }).toPromise().then((response:any) => {
                        console.log(response)
                        callback();
                        });

           }
          }
}
