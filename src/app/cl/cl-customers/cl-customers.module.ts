import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ClCustomersRoutingModule } from './cl-customers-routing.module';
import { ListComponent } from './list/list.component';

import {TableModule} from 'primeng/table';
import {PanelModule} from "primeng/panel";
import {DropdownModule, InputTextareaModule, InputTextModule, TabViewModule} from "primeng/primeng";
import {ButtonModule} from "primeng/button";
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";
import { StatModule } from '../../shared';
import { CustomerService } from '../../shared/services/customer.service';
import { AddComponent } from './add/add.component';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    ClCustomersRoutingModule,
    StatModule,
    TableModule,
    ToastModule,
    MessageModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TabViewModule,
    CalendarModule
  ],
  declarations: [ListComponent, AddComponent],
  providers:[CustomerService]
})
export class ClCustomersModule { }
