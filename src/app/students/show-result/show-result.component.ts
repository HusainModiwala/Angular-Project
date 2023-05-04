import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResultManagementServiceService} from 'src/app/result-management-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private service: ResultManagementServiceService, private router: Router) { }

  rollNo: number = NaN;
  name: string = "";
  dob: Date = new Date();
  score: number = NaN;

  ngOnInit(): void {
    this.service.getResultById(this.ar.snapshot.params['id']).subscribe((res:any)=>{
      this.rollNo = res.rollNo;
      this.name = res.name;
      this.dob = res.dob;
      this.score = res.score;
    })
  }

  logout(){
    this.router.navigateByUrl('');
  }
}
