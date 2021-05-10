import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import { TemplateDrivenComponent } from './template-driven.component';


@NgModule({
  declarations: [TemplateDrivenComponent],
  imports: [
    CommonModule,
    TemplateDrivenRoutingModule
  ]
})
export class TemplateDrivenModule { }
