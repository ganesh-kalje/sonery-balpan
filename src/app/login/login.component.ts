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
            console.log(data);
        }, (errorResponse) => {
            console.log(errorResponse);
        });

        /*if(username === '9762029258' && password === 'admin') {
    		this.router.navigate(['dashboard']);
    	} else {
            this.router.navigate(['cl']);
    	}
    	localStorage.setItem('isLoggedin', 'true');
    	*/
    }
}
