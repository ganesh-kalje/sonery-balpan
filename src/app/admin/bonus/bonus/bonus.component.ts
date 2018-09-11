import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
  animations: [routerTransition()]
})
export class BonusComponent implements OnInit {
	bonus: any[];
  constructor() { }

  ngOnInit() {
  	this.bonus = [
  		{
  			"id" : 1,
  			"name" : "Ganesh kalje",
  			"amount" : 250,
  			"dateTime" : "25/5/2018"
  		},
  		{
  			"id" : 2,
  			"name" : "Sudeep Bhat",
  			"amount" : 500,
  			"dateTime" : "25/6/2018"
  		}
  	];
  }

}
