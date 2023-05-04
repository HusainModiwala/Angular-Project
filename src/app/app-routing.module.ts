import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {
    path:'teachers', loadChildren:()=>import('./teachers/teachers.module')
                      .then(mod=> mod.TeachersModule)
  },
  {
    path:'students', loadChildren:()=>import('./students/students.module')
                      .then(mod=> mod.StudentsModule)
  },
  {path:'', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
