import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelebrityRoutingModule } from './celebrity-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    CelebrityRoutingModule
  ],
  declarations: [ListComponent]
})
export class CelebrityModule { }
