import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData : any;
  userData = {"username":"", "password":""}

  constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login(){

    this.authServiceProvider.postData(this.userData, "login").then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem("balaaghData", JSON.stringify(this.responseData));
      this.navCtrl.push(TabsPage);
      
    }, (error) => {
      // Connection failed message
    });

  }

}
