import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CelebrityRoutingModule } from './celebrity-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CelebrityComponent } from './celebrity.component';
import { TranslateModule } from '@ngx-translate/core';
import { JwtInterceptor } from './../shared/services/jwt.interceptor';
import { ErrorInterceptor } from './../shared/services/error.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule,
    CelebrityRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  declarations: [ SidebarComponent, HeaderComponent, CelebrityComponent]
})
export class ClModule { }
