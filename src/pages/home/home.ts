import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userDetails : any;
  public responseData : any;
  public todaySet : any;
  public upcomingSet : any;
  public nothingToday : any;
  public nothingUpcoming : any;
  
  

  userPostData = {"user_id":"", "token":""}

  constructor(public navCtrl: NavController, public app: App, public authServiceProvider: AuthServiceProvider) {

    this.userDetails = {"userid":1, "username":"athar", "name":"Athar Aziz", "email":"athar@alathar.org", "token":"a20f3362c6c77b5d32ea1d692c9a33e74cf1deb4e364d8e78a9c94f226daa198" };
    this.userPostData.user_id = this.userDetails.userid;
    this.userPostData.token = this.userDetails.token;
    
    this.getFeed();
  }

  getFeed() {

    var pipe = new DatePipe('en-US');
    var todaysDate = pipe.transform(new Date(), "yyyyMMdd");

    this.authServiceProvider.postData(this.userPostData, "feed").then((result) => {
      this.responseData = result;
      if (this.responseData.feedData){
        this.todaySet = this.responseData.feedData;
        this.todaySet = this.todaySet.filter(function (item) {
          var itemDate = pipe.transform(item.event_dt, "yyyyMMdd");
          return itemDate == todaysDate;
        });

        this.upcomingSet = this.responseData.feedData;
        this.upcomingSet = this.upcomingSet.filter(function (item) {
          var itemDate = pipe.transform(item.event_dt, "yyyyMMdd");
          return itemDate > todaysDate;
        });
        
        this.nothingToday = this.todaySet.length === 0;
        this.nothingUpcoming = this.upcomingSet.length === 0;
        
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
