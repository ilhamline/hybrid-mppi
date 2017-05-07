import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tap: number = 0;
  public jumlahData: number = 10000;
  public hehe: string;
  public startTime: string;
  public endTime: string;
  public elapsedTime: string;
  constructor(public navCtrl: NavController) {

  }

  tapEvent(e) {
    var arr = [];
    for (var i=0, t=this.jumlahData; i<t; i++) {
      arr.push(Math.round(Math.random() * t))
    }
    var sTime = Date.now();
    arr = arr.sort();
    var eTime = Date.now();
    this.startTime = new Date(sTime).toString();
    this.endTime = new Date(eTime).toString();
    this.elapsedTime = (eTime-sTime).toString();
    this.hehe = arr.toString()
  }

}
