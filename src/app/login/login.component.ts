import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators	} from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';


var loginForm = {
    login: ['12345', [Validators.minLength(5), Validators.required]],
    password: ['12345', [Validators.minLength(5), Validators.required]]
};

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [
        LoginService
    ]
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(fb: FormBuilder, private loginService: LoginService, private router: Router) {
        this.form = fb.group(loginForm);
    }

    ngOnInit() { }

    login(event: Event) {
        this.loginService
            .login(this.form.value)
            .then(() => this.toHome());

        event.preventDefault();
    }

    toHome() {
        this.router.navigate(['/home']);
    }
}
