import { Component, OnInit, Input } from '@angular/core';

import { Moment } from './moment';

@Component({
  selector: 'moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.scss']
})
export class MomentComponent implements OnInit {
    @Input()
    moment: Moment;

    constructor() { }

    ngOnInit() {
    }

}
