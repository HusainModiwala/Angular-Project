import { Component, OnInit } from '@angular/core';
import {ResultManagementServiceService} from 'src/app/result-management-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  objCollection:any = [];
  constructor(private resService: ResultManagementServiceService, private router: Router) { }

  ngOnInit(): void {
    this.resService.getList().subscribe((res)=>{
      this.objCollection = res;
    })
  }

  deleteResult(id:number){
    this.resService.deleteResult(id).subscribe((res)=>{
      console.warn(res);
      this.ngOnInit();
    })
  }

  updateResult(id:number){
    this.router.navigateByUrl(`teachers/update-result/${id}`);
  }

  addRecord(){
    this.router.navigateByUrl('/teachers/add-result');
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
  }
}
