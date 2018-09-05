import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router) {}

    ngOnInit() {}

    onLoggedin(username, password) {
    	if(username === '9762029258' && password === 'admin') {
    		this.router.navigate(['dashboard']);
    	} else {
            this.router.navigate(['cl']);
    	}
    	localStorage.setItem('isLoggedin', 'true');
    }
}
