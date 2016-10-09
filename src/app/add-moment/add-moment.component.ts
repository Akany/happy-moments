import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AddMomentService } from './add-moment.service';

var formModel = {
	moment: ['', [Validators.minLength(5), Validators.required]]
};

@Component({
	selector: 'add-moment',
	templateUrl: './add-moment.component.html',
	styleUrls: ['./add-moment.component.scss'],
	providers: [
		AddMomentService
	]
})
export class AddMomentComponent implements OnInit {
	form: FormGroup;

	constructor(fb: FormBuilder, private momentService: AddMomentService, private router: Router) {
		this.form = fb.group(formModel);
	}

	ngOnInit() { }

	addMoment(event: Event) {
		this.momentService
			.add(this.form.value)
			.then(() => {
				this.router.navigate(['/home']);
			});

		event.preventDefault();
	}

}
