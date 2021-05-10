import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import { TemplateDrivenComponent } from './template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TemplateDrivenComponent],
  imports: [
    CommonModule,
    TemplateDrivenRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TemplateDrivenModule { }
