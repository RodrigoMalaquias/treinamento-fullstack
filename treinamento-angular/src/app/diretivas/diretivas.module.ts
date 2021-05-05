import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivasRoutingModule } from './diretivas-routing.module';
import { DiretivasComponent } from './diretivas.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { DiretivaPersonalizadaDirective } from './diretivas-personalizadas/diretiva-personalizada.directive';
import { DiretivasPersonalizadasComponent } from './diretivas-personalizadas/diretivas-personalizadas.component';
import { HighLightMouseDirective } from './diretivas-personalizadas/high-light-mouse.directive';
import { HighlightDirective } from './diretivas-personalizadas/highlight.directive';
import { NgElseDirective } from './diretivas-personalizadas/ng-else.directive';


@NgModule({
  declarations: [DiretivasComponent, NgContentComponent, DiretivaPersonalizadaDirective, DiretivasPersonalizadasComponent, HighLightMouseDirective, HighlightDirective, NgElseDirective],
  imports: [
    CommonModule,
    DiretivasRoutingModule
  ]
})
export class DiretivasModule { }
