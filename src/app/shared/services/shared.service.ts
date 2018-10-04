import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs/index';
import {MessageService} from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    blockUiObservable: Subject<boolean> = new Subject<boolean>();
    constructor(private http: HttpClient, private messageService: MessageService) { }

    blockUI(isBlock: boolean) {
        this.blockUiObservable.next(isBlock);
    }

    handleHttpError(errorResponse) {
        console.log(errorResponse);
        this.messageService.add({severity: 'error', summary: 'Error', detail: errorResponse.message});
    }

    handleError(errorResponse) {
        
    }
}
