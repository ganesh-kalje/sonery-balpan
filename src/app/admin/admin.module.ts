import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {CelebrityService} from './service/celebrity.service';
import {AdminService} from './service/admin.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,
    TranslateModule
  ],
  declarations: [AdminComponent, SidebarComponent, HeaderComponent],
  providers: [CelebrityService, AdminService]
})
export class AdminModule { }
