import { Component, OnInit } from '@angular/core';

import { PokemonService } from './pokemon.service';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: string[] = [];
  pokemonService: PokemonService;

  constructor(private _pokemonService: PokemonService) { 
    this.pokemonService = _pokemonService;
  }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
    // this.pokemons.push(this.pokemonService.addPokemon("Squirtle"));
  }

}
