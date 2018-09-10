import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomersRoutingModule } from './customers-routing.module';
import { ListComponent } from './list/list.component';

import {TableModule} from 'primeng/table';
import { StatModule } from '../../shared';
import { CustomerService } from '../../shared/services/customer.service';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    CustomersRoutingModule,
    StatModule,
    TableModule
  ],
  declarations: [ListComponent],
  providers:[CustomerService]
})
export class CustomersModule { }
