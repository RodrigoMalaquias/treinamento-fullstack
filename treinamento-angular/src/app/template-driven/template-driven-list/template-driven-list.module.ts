import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenListRoutingModule } from './template-driven-list-routing.module';
import { TemplateDrivenListComponent } from './template-driven-list.component';


@NgModule({
  declarations: [TemplateDrivenListComponent],
  imports: [
    CommonModule,
    TemplateDrivenListRoutingModule
  ]
})
export class TemplateDrivenListModule { }
