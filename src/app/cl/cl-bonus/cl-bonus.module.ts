import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ClBonusRoutingModule } from './cl-bonus-routing.module';
import { ListComponent } from './list/list.component';

import {TableModule} from 'primeng/table';
import { StatModule } from '../../shared';
import {DropdownModule, InputTextareaModule, InputTextModule, TabViewModule} from "primeng/primeng";
import {PanelModule} from "primeng/panel";

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    ClBonusRoutingModule,
    StatModule,
    TableModule,
    PanelModule,
    DropdownModule, InputTextareaModule, InputTextModule, TabViewModule,
  ],
  declarations: [ListComponent]
})
export class ClBonusModule { }
