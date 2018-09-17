import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, ToastModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
