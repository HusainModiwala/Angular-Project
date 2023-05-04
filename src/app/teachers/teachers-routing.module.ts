import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewResultComponent } from './add-result/add-result.component';
import { ResultListComponent } from './result-list/result-list.component';
import {UpdateResultComponent} from './update-result/update-result.component';
import {RegisterTeacherComponent} from './register-teacher/register-teacher.component';
import {LoginTeacherComponent} from './login-teacher/login-teacher.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path:'add-result', component: AddNewResultComponent, canActivate: [AuthGuard]},
  {path:'result-list', component: ResultListComponent, canActivate: [AuthGuard]},
  {path:'update-result/:id', component: UpdateResultComponent, canActivate: [AuthGuard]},
  {path:'register', component: RegisterTeacherComponent},
  {path:'login', component: LoginTeacherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
