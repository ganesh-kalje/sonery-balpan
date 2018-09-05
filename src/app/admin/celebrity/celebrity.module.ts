import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { CelebrityRoutingModule } from './celebrity-routing.module';
import { ListComponent } from './list/list.component';
import {TableModule} from 'primeng/table';
import {AddComponent} from './add/add.component';
import {PanelModule} from "primeng/panel";
import {DropdownModule, InputTextareaModule, InputTextModule, TabViewModule} from "primeng/primeng";
import {ButtonModule} from "primeng/button";
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";
import { StatModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    CelebrityRoutingModule,
    StatModule,
    TableModule,
      ToastModule,
      MessageModule,
      PanelModule,
      DropdownModule,
      InputTextModule,
      InputTextareaModule,
      ButtonModule,
      TabViewModule
  ],
  declarations: [ListComponent, AddComponent]
})
export class CelebrityModule { }
