import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormulierPage} from '../formulier/formulier'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

form: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, af:AngularFireDatabase) {
this.form = af.list('/form');
  }
contact(){
  this.navCtrl.push(FormulierPage);
}
}
