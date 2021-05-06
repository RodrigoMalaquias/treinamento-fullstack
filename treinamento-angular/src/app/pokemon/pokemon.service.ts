import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemons(){
    return ["Charmander","Charizard"];
  }

  addPokemon(pokemon : string){
    return [pokemon];
  }

  constructor() {
    console.log('PokemonService');
  }
}
