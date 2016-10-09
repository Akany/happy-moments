import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class LoginService {

	constructor() { }

	login(details) : Promise<void> {
		return Observable
			.create((observer: Subscriber<void>) => {
				observer.complete();
			})
			.toPromise();
	}

}
