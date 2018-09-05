import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonusRoutingModule } from './bonus-routing.module';
import { BonusComponent } from './bonus/bonus.component';
import {PanelModule} from "primeng/panel";
import {DropdownModule, InputTextareaModule, InputTextModule, TabViewModule} from "primeng/primeng";
import {ButtonModule} from "primeng/button";
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";

@NgModule({
  imports: [
    CommonModule,
    BonusRoutingModule,
    ToastModule,
    MessageModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TabViewModule
  ],
  declarations: [BonusComponent]
})
export class BonusModule { }
