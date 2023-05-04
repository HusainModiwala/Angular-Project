import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResultManagementServiceService {

  studentUrl = "http://localhost:3000/students"
  userUrl = "http://localhost:3000/users"
  isLoggedIn = new BehaviorSubject<boolean>(false);
  flag: boolean = false;
  
  constructor(private http: HttpClient, private router: Router) { }

  getList(){
    return this.http.get(this.studentUrl);
  }

  saveResult(data:object){
    return this.http.post(this.studentUrl, data);
  }

  deleteResult(id: number){
    return this.http.delete(`${this.studentUrl}/${id}`);
  }

  getResultById(id: number){
    return this.http.get(`${this.studentUrl}/${id}`);
  }

  updateResult(id:number, data:any){
    return this.http.put(`${this.studentUrl}/${id}`, data);
  }

  registerUser(data:object){
    return this.http.post(this.userUrl, data);
  }

  getUsers(){
    return this.http.get<any>(this.userUrl);
  }

  loginUser(email:any, password:any, alert_success:any, alert_failure:any){
    return this.http.get(`${this.userUrl}?email=${email}&password=${password}`, {observe: 'response'})
    .subscribe((res: any)=>{
      if (res && res.body && res.body.length) {
        this.isLoggedIn.next(true);
        localStorage.setItem("user", JSON.stringify(res.body));
        alert_success = true;
        this.router.navigateByUrl('/teachers/result-list');
      } else{
        alert_failure = true;
      }
    });
  }

  reloadPage(){
    if(localStorage.getItem('user')){
      this.isLoggedIn.next(true);
      this.router.navigateByUrl('/teachers/result-list');
    }
  }
}
