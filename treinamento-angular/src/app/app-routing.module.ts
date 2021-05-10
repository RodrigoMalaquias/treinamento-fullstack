import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'home',
    loadChildren:() => import("./home/home.module").then(m => m.HomeModule)
  },
  { 
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'data-binding',
    loadChildren:() => import("./data-binding/data-binding.module").then(m => m.DataBindingModule)
  },
  {
    path: 'diretivas',
    loadChildren:() => import("./diretivas/diretivas.module").then(m => m.DiretivasModule)
  },
  {
    path: 'servicos',
    loadChildren:() => import("./servicos/servicos.module").then(m => m.ServicosModule)
  },
  {
    path:'pipes',
    loadChildren:() => import("./pipes/pipes.module").then(m => m.PipesModule)
  },
  {
    path:'data-driven',
    loadChildren:() => import("./data-driven/data-driven.module").then(m => m.DataDrivenModule)
  },
  {
    path:'data-driven-list',
    loadChildren:() => import("./data-driven/data-driven-list/data-driven-list.module").then(m => m.DataDrivenListModule)
  },
  {
    path: 'template-driven',
    loadChildren:() => import("./template-driven/template-driven.module").then(m => m.TemplateDrivenModule)
  },
  {
    path: 'template-driven-list',
    loadChildren:() => import("./template-driven/template-driven-list/template-driven-list.module").then(m => m.TemplateDrivenListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
