import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {MessageService} from 'primeng/api';
import {LoginService} from '../shared/services/login.service';
import {SharedService} from '../shared/services/shared.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private messageService: MessageService,
                private loginService: LoginService, public sharedService: SharedService) {}
    model: any = {};
    ngOnInit() {
    }

    onLoggedIn(username, password) {
        this.loginService.login({'mobile': username, password: password}).subscribe((data) => {
            localStorage.setItem('currentUser', JSON.stringify(data));
            localStorage.setItem('authToken', data.authToken);
            localStorage.setItem('isLoggedin', 'true');
            if (data.user_type === '0') {
                this.router.navigate(['dashboard']);
            } else if (data.user_type === '1') {
                this.router.navigate(['cl']);
            }
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Logged in successfully.'});
        }, this.sharedService.handleHttpError.bind(this.sharedService));
    }
}
