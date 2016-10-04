import { Component, OnInit } from '@angular/core';

import { MomentComponent } from './moment/moment.component';
import { Moment } from './moment/moment';

@Component({
    selector: 'recent-moments',
    templateUrl: './recent-moments.component.html',
    styleUrls: ['./recent-moments.component.scss'],
    providers: [
        MomentComponent
    ]
})
export class RecentMomentsComponent implements OnInit {
    moments: Moment[] = [];

    constructor() { }

    ngOnInit() {
        this.moments = [
            new Moment('Had greate dinner', new Date(), ['food', 'fast']),
            new Moment('Happy moments development', new Date(), ['angular2', 'coding'])
        ];
    }

}
