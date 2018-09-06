import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ClDashboardRoutingModule } from './cl-dashboard-routing.module';
import { StatModule } from '../../shared';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { CldashboardComponent } from './cldashboard.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    ClDashboardRoutingModule,
    StatModule
  ],
  declarations: [TimelineComponent, NotificationComponent, ChatComponent, CldashboardComponent]
})
export class ClDashboardModule { }
