import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { StudentsRoutingModule } from './students-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';
import { ShowResultComponent } from './show-result/show-result.component';


@NgModule({
  declarations: [
    SearchResultComponent,
    ShowResultComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
