import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userDetails : any; 

  constructor(public navCtrl: NavController, public app: App) {

    //this.userDetails = {"username":"", "name": "", "email": "" };

  }

  logout(){
    //API Token logout
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
