import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

import { LoginPage } from "../login/login";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData : any;
  userData = {"username":"", "password":"", "name": "", "email": "" }

  constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('Signup Page Loaded');
  }

  signup() {
    //API Connections
    this.authServiceProvider.postData(this.userData, "signup").then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('balaaghData', JSON.stringify(this.responseData));
      this.navCtrl.push(TabsPage);
    }, (error) => {
      // Connection failed message
    });
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

}
