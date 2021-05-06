import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  //https://pokeapi.co/api/v2/pokemon/{}


  // pokemonIniciais(pokemon: any) {
  //   return this.http.get(`//https://pokeapi.co/api/v2/pokemon/${pokemon}/json`);
  // }


  constructor(private http: HttpClient) { }
}
