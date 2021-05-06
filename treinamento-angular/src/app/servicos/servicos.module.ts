import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonService } from '../pokemon/pokemon.service';
import { CriarPokemonComponent } from '../criar-pokemon/criar-pokemon.component';


@NgModule({
  declarations: [ServicosComponent,PokemonComponent,CriarPokemonComponent],
  imports: [
    CommonModule,
    ServicosRoutingModule
  ],
  providers: [PokemonService]
})
export class ServicosModule { }
