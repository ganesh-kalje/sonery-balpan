import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';


@Injectable()
export class CelebrityService {

    constructor(private http: HttpClient) { }

    getCelebrity(): Observable<any> {
        return this.http.get('./assets/api/celebrity.json');
    }

    createCelebrity(requestData) {
        return this.http.get('./assets/api/celebrity.json');
    }

    deleteCelebrity(recordId) {
        return this.http.get('./assets/api/celebrity.json');
    }

    payCelbrityBonus(recordId) {
        return this.http.get('./assets/api/celebrity.json');
    }
}

