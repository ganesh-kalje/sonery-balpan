import { Component, OnInit } from '@angular/core';
import {CelebrityService} from '../../service/celebrity.service';
import { routerTransition } from '../../../router.animations';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {SharedService} from './../../../shared/services/shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]
})
export class ListComponent implements OnInit {
      celebrity: any[] = [];
      constructor(private celebrityService: CelebrityService,
           private confirmationService: ConfirmationService,
           private messageService: MessageService,
           public sharedService: SharedService) { }

      ngOnInit() {
        this.celebrityService.getCelebrity().subscribe((data) => {
            this.celebrity = data;
        });
      }

      confirm(record) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
              this.celebrityService.deleteCelebrity(record['id']).subscribe((data) => {
                this.messageService.add({severity: 'success', summary: 'Success', detail: 'Celebrity deleted successfully.'});
              }, this.sharedService.handleError.bind(this.sharedService));
            },
            reject: () => {
                // To reject
            }
        });
      }

      payBonus(record) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
              this.celebrityService.payCelbrityBonus(record['id']).subscribe((data) => {
                this.messageService.add({severity: 'success', summary: 'Success', detail: 'Bonus Paid Successfully.'});
              }, this.sharedService.handleError.bind(this.sharedService));
            },
            reject: () => {
                // To reject
            }
        });
      }
}
