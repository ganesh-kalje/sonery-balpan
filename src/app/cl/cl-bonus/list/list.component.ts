import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]
})
export class ListComponent implements OnInit {
bonusList: any[];
  constructor() { }

  ngOnInit() {
  	this.bonusList = [{}, {}, {}];
  }

}
