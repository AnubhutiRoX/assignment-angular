import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, authResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    constructor(private authService: AuthService, private router: Router){}

    isLogin: boolean = true;
    @ViewChild('f') form: NgForm;

    onSwitchMode() {
        this.isLogin = !this.isLogin;
    }

    onSubmit() {
        if (!this.form.value) {
            return;
        }
        const email = this.form.value.email;
        const password = this.form.value.password;
        let authObs: Observable<authResponseData>

        if (this.isLogin) {
            authObs = this.authService.login(email, password);
        } else {
            authObs = this.authService.signup(email, password);
        }
        authObs
            .subscribe((res) => {
                console.log(res);
                this.router.navigate(['/recipes']);
            }, (error) => {
                console.log(error);
            });
        this.form.reset();
    }
}