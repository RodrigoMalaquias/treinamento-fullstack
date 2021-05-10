import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenListComponent } from './template-driven-list.component';


const routes: Routes = [{
  path: "",
  component: TemplateDrivenListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenListRoutingModule { }
