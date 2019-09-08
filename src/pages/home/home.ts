import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userDetails : any;
  public responseData : any;
  public dataSet : any;
  public todaysDate : any; 

  userPostData = {"user_id":"", "token":""}

  constructor(public navCtrl: NavController, public app: App, public authServiceProvider: AuthServiceProvider) {

    this.userDetails = {"userid":1, "username":"athar", "name":"Athar Aziz", "email":"athar@alathar.org", "token":"a20f3362c6c77b5d32ea1d692c9a33e74cf1deb4e364d8e78a9c94f226daa198" };
    this.userPostData.user_id = this.userDetails.userid;
    this.userPostData.token = this.userDetails.token;
    this.todaysDate = new Date();
    this.getFeed();
  }

  getFeed() {

    this.authServiceProvider.postData(this.userPostData, "feed").then((result) => {
      this.responseData = result;
      if (this.responseData.feedData){
        this.dataSet = this.responseData.feedData;
      }
      else
      {
        console.log("No access on home.ts");
      }
      
      
    }, (error) => {
      // Connection failed message
    });

  }




  logout(){
    //API Token logout
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
