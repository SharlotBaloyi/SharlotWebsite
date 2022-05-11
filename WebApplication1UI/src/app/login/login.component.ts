import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    passWord: new FormControl(''),
  });

  submitted = false;

  constructor(public fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      passWord: ['', [Validators.required, Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      localStorage.setItem("userName", this.loginForm.get('userName')?.value);
      localStorage.setItem("passWord", this.loginForm.get('passWord')?.value);
      this.clear();
      this.loginForm.disable();
      this.router.navigate(['registration']);
    }
  }

  clear() {
    this.loginForm.patchValue({
      userName: '',
      passWord: ''
    });
  }

}
