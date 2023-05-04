import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ActivatedRoute} from '@angular/router';
import {ResultManagementServiceService} from 'src/app/result-management-service.service';

@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css']
})
export class UpdateResultComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private service: ResultManagementServiceService) { }
  alert:boolean = false;
  updateResult=new FormGroup({
    rollNo:new FormControl('', [Validators.required, Validators.minLength(4)]),
    name:new FormControl('', Validators.required),
    dob:new FormControl('', Validators.required),
    score:new FormControl('', Validators.required)
  })

  get rollNo() {return this.updateResult.get('rollNo');}
  get name() {return this.updateResult.get('name')}
  get dob() {return this.updateResult.get('dob')}
  get score() {return this.updateResult.get('score')}


  ngOnInit(): void {
    this.service.getResultById(this.ar.snapshot.params['id']).subscribe((res:any)=>{
      this.updateResult=new FormGroup({
        rollNo:new FormControl(res['rollNo'], [Validators.required, Validators.minLength(4)]),
        name:new FormControl(res['name'], Validators.required),
        dob:new FormControl(res['dob'], Validators.required),
        score:new FormControl(res['score'], Validators.required)
      })
      console.warn(res);
    })
  }

  updateInfo(){
    this.service.updateResult(this.ar.snapshot.params['id'], this.updateResult.value).subscribe((res)=>{
      this.alert = true;
    });
    this.resetForm();
  }

  resetForm(){
    this.updateResult.reset({});
  }

  closeAlert(){
    this.alert = false;
  }
}
