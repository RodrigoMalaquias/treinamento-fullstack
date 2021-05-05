import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonService } from '../pokemon/pokemon.service';


@NgModule({
  declarations: [ServicosComponent,PokemonComponent],
  imports: [
    CommonModule,
    ServicosRoutingModule
  ],
  providers: [PokemonService]
})
export class ServicosModule { }
