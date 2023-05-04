import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, EmailValidator} from '@angular/forms'
import {ResultManagementServiceService} from 'src/app/result-management-service.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {

  constructor(private result: ResultManagementServiceService) { }

  alert:boolean = false;
  addUser=new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  ngOnInit(): void {
  }

  
  get email() {return this.addUser.get('email');}
  get password() {return this.addUser.get('password')}
  
  registerUser(){
    this.result.registerUser(this.addUser.value).subscribe((res)=>{
      this.alert = true;
    });
    this.resetForm();
  }

  resetForm(){
    this.addUser.reset({});
  }

  closeAlert(){
    this.alert = false;
  }

}
