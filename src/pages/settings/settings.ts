import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public app: App ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings Page');
  }

  logout(){
    //API Token logout
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  
}
