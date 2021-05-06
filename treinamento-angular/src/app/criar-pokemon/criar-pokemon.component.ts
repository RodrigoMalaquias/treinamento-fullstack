import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-criar-pokemon',
  templateUrl: './criar-pokemon.component.html',
  styleUrls: ['./criar-pokemon.component.css']
})
export class CriarPokemonComponent implements OnInit {

  pokemons: string[] = [];

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons = this._pokemonService.getPokemons();
  }

}
