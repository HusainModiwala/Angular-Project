import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { TeachersRoutingModule } from './teachers-routing.module';
import { AddNewResultComponent } from './add-result/add-result.component';
import { ResultListComponent } from './result-list/result-list.component';
import { UpdateResultComponent } from './update-result/update-result.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';

@NgModule({
  declarations: [
    AddNewResultComponent,
    ResultListComponent,
    UpdateResultComponent,
    RegisterTeacherComponent,
    LoginTeacherComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    ReactiveFormsModule
  ]
})
export class TeachersModule { }
