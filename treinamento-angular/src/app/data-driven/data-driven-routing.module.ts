import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataDrivenListComponent } from './data-driven-list/data-driven-list.component';
import { DataDrivenComponent } from './data-driven.component';


const routes: Routes = [{
  path: "",
  component: DataDrivenComponent,
  },
  {
    path: "novo",
    component: DataDrivenListComponent
  },
  {
    path: "editar/:id",
    component: DataDrivenListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataDrivenRoutingModule { }
