import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
  animations: [routerTransition()]
})
export class BonusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
