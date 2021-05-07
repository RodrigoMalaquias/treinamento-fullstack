import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataDrivenRoutingModule } from './data-driven-routing.module';
import { DataDrivenComponent } from './data-driven.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DataDrivenComponent],
  imports: [
    CommonModule,
    DataDrivenRoutingModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class DataDrivenModule { }
