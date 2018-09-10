import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { CustomerService } from '../../../shared/services/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]
})
export class ListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customers: any[];

  ngOnInit() {
  	this.customerService.getCustomers().subscribe((data) => {
  		this.customers = data;
    });
  }

}
