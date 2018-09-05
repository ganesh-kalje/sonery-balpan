import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {PanelModule} from "primeng/panel";
import {DropdownModule, InputTextareaModule, InputTextModule, TabViewModule} from "primeng/primeng";
import {ButtonModule} from "primeng/button";
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    PanelModule,
    DropdownModule, 
    InputTextareaModule, 
    InputTextModule, 
    TabViewModule, 
    ButtonModule, 
    MessageModule,
    ToastModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
