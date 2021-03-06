import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataDrivenComponent } from '../data-driven.component';
import { DataDrivenListComponent } from './data-driven-list.component';


const routes: Routes = [
  {
  path: "",
  component: DataDrivenListComponent
 },
 {
  path: "editar-pokemon/:id",
  component: DataDrivenComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataDrivenListRoutingModule { }
