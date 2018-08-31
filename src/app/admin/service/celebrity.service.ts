import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';


@Injectable()
export class CelebrityService {

    constructor(private http: HttpClient) { }

    getCelebrity(): Observable<any> {
        return this.http.get('./assets/api/celebrity.json');
    }

}

