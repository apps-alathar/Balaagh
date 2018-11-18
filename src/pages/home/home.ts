import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userDetails : any; 

  constructor(public navCtrl: NavController, public app: App) {

    if (localStorage.getItem("balaaghData") != "undefined")
    {
      const data = JSON.parse(localStorage.getItem("balaaghData"));
      console.log(data.userData);
      this.userDetails = data.userData;
    }
    else
    {
      this.userDetails = {"username":"unknown", "name": "Unknown", "email": "unknown@error.com" }
    }

  }

  logout(){
    //API Token logout
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
