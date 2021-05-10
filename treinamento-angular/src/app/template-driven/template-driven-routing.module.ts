import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolverGuard } from '../data-driven/guards/data-resolver.guard';
import { TemplateDrivenComponent } from './template-driven.component';


const routes: Routes = [
{
  path: "",
  component: TemplateDrivenComponent
},
{
  path: "editar/:id",
  component: TemplateDrivenComponent,
  resolve: {
    pokemon: DataResolverGuard
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenRoutingModule { }
