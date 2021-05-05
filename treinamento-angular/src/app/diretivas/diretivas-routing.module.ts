import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiretivasComponent } from './diretivas.component';


const routes: Routes = [
  {
    path: "",
    component: DiretivasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiretivasRoutingModule { }
