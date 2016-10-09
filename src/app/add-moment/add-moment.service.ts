import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class AddMomentService {

	constructor() { }

	add(momentDetails): Promise<any[]> {
		return Observable
			.create((observer: Subscriber<any[]>) => {
				observer.next();
				observer.complete();
			})
			.toPromise();
	}
}
