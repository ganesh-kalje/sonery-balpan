import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelebrityRoutingModule } from './celebrity-routing.module';
import { ListComponent } from './list/list.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    CelebrityRoutingModule,
    TableModule
  ],
  declarations: [ListComponent]
})
export class CelebrityModule { }
