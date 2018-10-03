import { Component, OnInit } from '@angular/core';
import {SharedService} from './shared/services/shared.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    blockDashboard$;
    blockDashboard = false;

    constructor(private sharedService: SharedService) {
    }

    ngOnInit() {
        this.blockDashboard$ = this.sharedService.blockUiObservable.subscribe((value) => {
            this.blockDashboard = value;
        });
    }
}
