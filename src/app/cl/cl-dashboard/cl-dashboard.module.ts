import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClDashboardRoutingModule } from './cl-dashboard-routing.module';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ClDashboardRoutingModule
  ],
  declarations: [TimelineComponent, NotificationComponent,
        ChatComponent]
})
export class ClDashboardModule { }
