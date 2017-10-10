import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-formulier',
  templateUrl: 'formulier.html',
})
export class FormulierPage {
  invoer: FirebaseListObservable<any>;
  data = { title: " ", description: " ", vraag1: " ", vraag2: " ", vraag3: " ", vraag4: " " }
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, public toastCtrl: ToastController) {
    this.invoer = af.list('/invoer');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormulierPage');
  }




  SaveData() {
    this.invoer.push({
      description: this.data.description,
      title: this.data.title,
      vraag1: this.data.vraag1,
      vraag2: this.data.vraag2,
      vraag3: this.data.vraag3,
      vraag4: this.data.vraag4

    })
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Contact moment opgeslagen',
      duration: 3000,
      position: 'top'
    });
     toast.present();
  }
}
