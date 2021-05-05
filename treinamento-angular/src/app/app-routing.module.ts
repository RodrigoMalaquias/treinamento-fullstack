import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'data-binding',
    loadChildren:() => import("./data-binding/data-binding.module").then(m => m.DataBindingModule)
  },
  {
    path: 'diretivas',
    loadChildren:() => import("./diretivas/diretivas.module").then(m => m.DiretivasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
