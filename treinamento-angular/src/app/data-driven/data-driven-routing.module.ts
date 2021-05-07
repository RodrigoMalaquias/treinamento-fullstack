import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataDrivenComponent } from './data-driven.component';
import { DataResolverGuard } from './guards/data-resolver.guard';


const routes: Routes = [{
  path: "",
  component: DataDrivenComponent,
  },
  {
    path: "novo",
    component: DataDrivenComponent,
    resolve: {
      pokemon: DataResolverGuard
    }
  },
  {
    path: "editar/:id",
    component: DataDrivenComponent,
    resolve: {
      pokemon: DataResolverGuard
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataDrivenRoutingModule { }
