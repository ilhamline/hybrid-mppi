import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'sorting.html',
})
export class SortingPage {
  item;
  form = { size: '' };
  public tap: number = 0;
  public size: number;
  public hehe: string;
  public startTime: string;
  public endTime: string;
  public elapsedTime: string;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }

  startSort() {
    this.size = parseInt(this.form.size);
    switch (this.item.type) {
      case 'bubbleSort':
        this.bubbleSort();
        break;
      case 'quickSort':
        this.quickSort();
        break;
      case 'nQueens':
        this.nQueens();
        break;
    }
  }

  bubbleSort() {

  }

  quickSort() {
    var arr = [];
    for (var i=0, t=this.size; i<t; i++) {
      arr.push(Math.round(Math.random() * t))
    }
    var sTime = Date.now();
    arr = arr.sort();
    var eTime = Date.now();
    this.startTime = new Date(sTime).toString();
    this.endTime = new Date(eTime).toString();
    this.elapsedTime = (eTime-sTime).toString();
    if (this.size < 100000) {
      this.hehe = arr.toString()
    }
  }

  nQueens() {

  }
}

@Component({
  template: `
            <ion-header>
              <ion-navbar>
                <ion-title>Home</ion-title>
              </ion-navbar>
            </ion-header>
            <ion-content>
              <ion-list>
                <button ion-item *ngFor="let item of items" (click)="openSortingPage(item)" icon-left>
                  <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}" item-left></ion-icon>
                  {{ item.title }}
                </button>
              </ion-list>
            </ion-content>
            `
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
