import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataDrivenComponent } from './data-driven.component';


const routes: Routes = [{
  path: "",
  component: DataDrivenComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataDrivenRoutingModule { }
