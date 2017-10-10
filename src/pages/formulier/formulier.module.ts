import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormulierPage } from './formulier';

@NgModule({
  declarations: [
    FormulierPage,
  ],
  imports: [
    IonicPageModule.forChild(FormulierPage),
  ],
})
export class FormulierPageModule {}
