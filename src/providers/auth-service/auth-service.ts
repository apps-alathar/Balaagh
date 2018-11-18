import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

let authApiURL = "http://atharaziz.com/balaagh/api/";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  https://stackoverflow.com/questions/49329963/ionic-3-uncaught-in-promise-object-object
  https://stackoverflow.com/questions/33919710/property-json-does-not-exist-on-type
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type){

    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      this.http.post(authApiURL + type, JSON.stringify(credentials), {headers: headers})
      .subscribe(response => {
          console.log(response);
          resolve(response);
      }, (error) => {
        reject(error);
      }); 
    });
  }
}
