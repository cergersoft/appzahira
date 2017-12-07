import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ComentarioPage } from '../comentario/comentario';
import { FacebookPage } from '../facebook/facebook';

/**
 * Generated class for the PaseosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paseos',
  templateUrl: 'paseos.html',
})
export class PaseosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaseosPage');
  }

  Comentario(){
    this.navCtrl.push(ComentarioPage);
  }

  Facebook(){
    this.navCtrl.push(FacebookPage); 
  }

}
