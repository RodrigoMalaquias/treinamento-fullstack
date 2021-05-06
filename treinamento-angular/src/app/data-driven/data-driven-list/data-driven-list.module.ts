import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataDrivenListRoutingModule } from './data-driven-list-routing.module';
import { DataDrivenListComponent } from './data-driven-list.component';



@NgModule({
  declarations: [DataDrivenListComponent],
  imports: [
    CommonModule,
    DataDrivenListRoutingModule
  ]
})
export class DataDrivenListModule { }
