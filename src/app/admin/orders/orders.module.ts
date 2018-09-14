import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ListComponent } from './list/list.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TableModule
  ],
  declarations: [ListComponent]
})
export class OrdersModule { }
