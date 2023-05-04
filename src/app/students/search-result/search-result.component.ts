import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ResultManagementServiceService} from 'src/app/result-management-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private result: ResultManagementServiceService, private router: Router) {}

  alert_failure: boolean = false;
  searchForm = new FormGroup({
    rollNo: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  get rollNo() {
    return this.searchForm.get('rollNo');
  }
  get name() {
    return this.searchForm.get('name');
  }
  get dob() {
    return this.searchForm.get('dob');
  }

  validateStudent() {
    const rollNo = this.searchForm.value.rollNo;
    const name = this.searchForm.value.name;
    const dob = this.searchForm.value.dob;

    this.result.getList().subscribe((res: any) => {
      const user = res.find((a: any) => {
        return a.rollNo === rollNo && a.name === name && a.dob === dob;
      })
      if (user) {
        this.router.navigateByUrl(`/students/show-result/${user.id}`);
      } else {
        this.alert_failure = true;
      }
    });
    this.resetForm();
  }

  resetForm() {
    this.searchForm.reset({});
  }

  closeAlert() {
    this.alert_failure = false;
  }

  logout(){
    this.router.navigateByUrl('');
  }
}
