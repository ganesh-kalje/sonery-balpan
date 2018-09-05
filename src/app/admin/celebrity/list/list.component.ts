import { Component, OnInit } from '@angular/core';
import {CelebrityService} from '../../service/celebrity.service';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]
})
export class ListComponent implements OnInit {
      celebrity: any[] = [];
      constructor(private celebrityService: CelebrityService) { }

      ngOnInit() {
        this.celebrityService.getCelebrity().subscribe((data) => {
            this.celebrity = data;
        });
      }

}
