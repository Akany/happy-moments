import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    addMoment() {
        console.log('on add moment');
    }

    showHistory() {
        console.log('on show history');
    }
}
