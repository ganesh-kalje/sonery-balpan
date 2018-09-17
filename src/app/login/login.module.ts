import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
    imports: [CommonModule, FormsModule,  LoginRoutingModule, ToastModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
