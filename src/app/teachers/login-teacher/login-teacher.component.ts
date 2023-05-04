import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ResultManagementServiceService} from 'src/app/result-management-service.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css'],
})
export class LoginTeacherComponent implements OnInit {
  constructor(private result: ResultManagementServiceService, private router: Router, private http: HttpClient) {}

  alert_success: boolean = false;
  alert_failure: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.result.reloadPage();
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  validateUser() {
    const email = this.loginForm.value.email;
    const pass = this.loginForm.value.password;
    this.result.loginUser(email, pass, this.alert_failure, this.alert_success);
  }

  resetForm() {
    this.loginForm.reset({});
  }

  closeAlert(flag: number) {
    if (flag == 1) this.alert_success = false;
    else this.alert_failure = false;
  }
}
