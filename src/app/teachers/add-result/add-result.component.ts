import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ResultManagementServiceService} from 'src/app/result-management-service.service';

@Component({
  selector: 'app-add-new-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddNewResultComponent implements OnInit {

  constructor(private result: ResultManagementServiceService) {}

  alert:boolean = false;
  addResult=new FormGroup({
    rollNo:new FormControl('', [Validators.required, Validators.minLength(4)]),
    name:new FormControl('', Validators.required),
    dob:new FormControl('', Validators.required),
    score:new FormControl('', Validators.required)
  })

  get rollNo() {return this.addResult.get('rollNo');}
  get name() {return this.addResult.get('name')}
  get dob() {return this.addResult.get('dob')}
  get score() {return this.addResult.get('score')}

  ngOnInit(): void {
  }
  collectResult(){
    this.result.saveResult(this.addResult.value).subscribe((res)=>{
      this.alert = true;
    });
    this.resetForm();
  }

  resetForm(){
    this.addResult.reset({});
  }

  closeAlert(){
    this.alert = false;
  }
}
