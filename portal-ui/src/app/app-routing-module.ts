import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubjectContextComponent} from './subject-context/subject-context.component';


export const routes: Routes = [
  {
    path: 'CustomizedMenuDropDown',
    component: SubjectContextComponent

  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
