import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ComentarioPage } from '../comentario/comentario';
import { FacebookPage } from '../facebook/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Comentario(){
    this.navCtrl.push(ComentarioPage);
  }

  Facebook(){
    this.navCtrl.push(FacebookPage); 
  }

}
