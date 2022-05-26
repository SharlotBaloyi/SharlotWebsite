import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_service/authentication.service';
import { UserService } from '../_service/user.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error: string;
    success: string;


  // authenticationService: any;



    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private  userService:UserService,
    ) {

        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['',[ Validators.required]],
            password: ['', [Validators.required]]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // show success message on registration
        if (this.route.snapshot.queryParams['registered']) {
            this.success = 'Registration successful';
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.error = null;
        this.success = null;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.login(this.loginForm.value)
            .subscribe((token) => {
              console.log(token);
              this.router.navigate(['/login'], { queryParams: { loggin: true }});
              this.loading = false;
            });
    }
}


