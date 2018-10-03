import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {MessageService} from 'primeng/api';
import {LoginService} from '../shared/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [MessageService]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private messageService: MessageService,
                private loginService: LoginService) {}
    model: any = {};
    ngOnInit() {
        /*setTimeout(() => {
            this.messageService.add({severity: 'success',
                summary: 'Service Message', detail: 'Via MessageService'});

        },2000)
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
        */
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
        }, (errorResponse) => {
            console.log(errorResponse);
        });
    }
}
