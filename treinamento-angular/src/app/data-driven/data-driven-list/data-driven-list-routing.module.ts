import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataDrivenListComponent } from './data-driven-list.component';


const routes: Routes = [{
  path: "",
  component: DataDrivenListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataDrivenListRoutingModule { }
