import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BatteryStatus } from '@ionic-native/battery-status';
import { QuickSortRunner, BubbleSortRunner, QueensProblemRunner } from './algorithms';

@Component({
  templateUrl: 'sorting.html',
})
export class SortingPage {
  item;
  form = { size: '' };
  public size: number;
  public hehe: string;
  public startTime: string;
  public endTime: string;
  public elapsedTime: string;
  public drainedLevel: number;
  public batteryLevel: number;

  constructor(params: NavParams, private batteryStatus: BatteryStatus) {
    this.item = params.data.item;
    this.drainedLevel = 0
  }

  startSort() {
    this.batteryStatus.onChange().subscribe(
      (status) => {
        this.drainedLevel++;
        this.batteryLevel = status.level;
        console.log(status.level, status.isPlugged);
      }
    );
    this.size = parseInt(this.form.size);
    var arr = [];
    for (var i=0, t=this.size; i<t; i++) {
      arr.push(Math.round(Math.random() * 1000))
    }
    switch (this.item.type) {
      case 'bubbleSort':
        this.bubbleSort(arr);
        break;
      case 'quickSort':
        this.quickSort(arr);
        break;
      case 'nQueens':
        this.nQueens();
        break;
    }
  }

  bubbleSort(arr) {
    var runner = new BubbleSortRunner;
    var sTime = Date.now();
    runner.run(arr);
    var eTime = Date.now();

    this.startTime = new Date(sTime).toString();
    this.endTime = new Date(eTime).toString();
    this.elapsedTime = (eTime-sTime).toString();
    if (this.size < 100000) {
      this.hehe = arr.toString()
    }
  }

  quickSort(arr) {
    var runner = new QuickSortRunner;
    var sTime = Date.now();
    runner.run(arr, 0, arr.length);
    var eTime = Date.now();

    this.startTime = new Date(sTime).toString();
    this.endTime = new Date(eTime).toString();
    this.elapsedTime = (eTime-sTime).toString();
    if (this.size < 100000) {
      this.hehe = arr.toString()
    }
  }

  nQueens() {
    var runner = new QueensProblemRunner;
    var sTime = Date.now();
    var result = runner.run(this.size);
    var eTime = Date.now();

    this.startTime = new Date(sTime).toString();
    this.endTime = new Date(eTime).toString();
    this.elapsedTime = (eTime-sTime).toString();
    if (this.size < 100000) {
      this.hehe = result;
    }
  }
}

@Component({
  templateUrl: 'home.html',
})
export class HomePage {
  items = [];

  constructor(public nav: NavController) {
    this.items = [
      {
        'title': 'Bubble sort',
        'icon': 'angular',
        'type': 'bubbleSort',
        'color': '#E63135'
      },
      {
        'title': 'Quick sort',
        'icon': 'css3',
        'type': 'quickSort',
        'color': '#0CA9EA'
      },
      {
        'title': 'N queens problem',
        'icon': 'css3',
        'type': 'nQueens',
        'color': '#0CA9EA'
      },
    ]
  }

  openSortingPage(item) {
    this.nav.push(SortingPage, { item: item });
  }

}
