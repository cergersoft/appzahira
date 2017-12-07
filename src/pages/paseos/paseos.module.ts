import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaseosPage } from './paseos';

@NgModule({
  declarations: [
    PaseosPage,
  ],
  imports: [
    IonicPageModule.forChild(PaseosPage),
  ],
})
export class PaseosPageModule {}
