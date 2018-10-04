import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import {MessageService} from 'primeng/api';
import {CelebrityService} from '../../service/celebrity.service';
import {SharedService} from './../../../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  animations: [routerTransition()]
})
export class AddComponent implements OnInit {
  celebrity = {
    name: '',
    address: '',
    mobile: '',
    password: '',
    confirm_password: '',
    adhar_card: '',
    pan_card: ''
  };
  cloneCelebrity: any;
  constructor(private messageService: MessageService,
    private celebrityService: CelebrityService,
    public sharedService: SharedService,
    public router: Router
  ) { }

  ngOnInit() {
    this.cloneCelebrity = Object.assign({}, this.celebrity);
  }

  createCelebrity() {
    if (this.celebrity.password !== this.celebrity.confirm_password) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Password and confirm password should match.'});
      return false;
    }

    this.celebrityService.createCelebrity(this.celebrity).subscribe((data) => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Celebrity created successfully.'});
      this.celebrity = Object.assign({}, this.cloneCelebrity);
      this.router.navigate(['celebrity']);
    }, this.sharedService.handleError.bind(this.sharedService));
  }

  
}
