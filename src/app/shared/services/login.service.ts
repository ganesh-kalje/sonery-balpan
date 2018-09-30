import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    login(requestData): Observable<any> {
        return this.http.post('http://localhost/login.php', requestData);
    }
}
