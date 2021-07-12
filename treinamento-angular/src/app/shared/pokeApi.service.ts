  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class pokeApiService {

  constructor(
    private http: HttpClient
  ) { }

  consultaPokemons() {

    return this.http.get(`//pokeapi.co/api/v2/type`);


    //Retornar algo caso o cep seja valido ou nao
    return of({})
  }

}