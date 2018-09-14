import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]
})
export class ListComponent implements OnInit {

  orders: any[];
  currentDate: any;
    viewAddForm = false;
  constructor() { }

  ngOnInit() {
    this.currentDate = new Date();
    this.orders = [{
      name: "ganesh", order_number : "25", total : "25", "order_date" : "25/05/2018"
    }];
  }

    showHideAddForm() {
    this.viewAddForm = !this.viewAddForm;
  }

}
