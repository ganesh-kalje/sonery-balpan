import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CelebrityRoutingModule } from './celebrity-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CelebrityComponent } from './celebrity.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule,
    CelebrityRoutingModule
  ],
  declarations: [ SidebarComponent, HeaderComponent, CelebrityComponent]
})
export class ClModule { }
