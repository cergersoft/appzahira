import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ComentarioPage } from '../comentario/comentario';
import { FacebookPage } from '../facebook/facebook';
import { PhotoPage } from '../photo/photo';

/**
 * Generated class for the GaleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galery',
  templateUrl: 'galery.html',
})
export class GaleryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleryPage');
  }

  Comentario(){
    this.navCtrl.push(ComentarioPage);
  }

  Facebook(){
    this.navCtrl.push(FacebookPage); 
  }

  Photo(){
    this.navCtrl.push(PhotoPage); 
  }

}
