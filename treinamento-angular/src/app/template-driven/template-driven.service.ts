import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemon } from './pokemon';

import { delay, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateDrivenService {

  private readonly API = `${environment.API}pokemon`; 

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<pokemon[]>(this.API)
    .pipe( 
      delay(2000),
      take(1), // take é usado para requisicoes ajax simples, então ali eu faço com que a inscricao seja passada apenas uma vez
      tap(console.log)
    )
  }

  //tap com intuito de debugar  

  loadById(id){
    return this.http.get<pokemon>(`${this.API}/${id}`).pipe(take(1));
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

  private create(pokemon) {
    return this.http.post(this.API, pokemon).pipe(take(1));
  }

  private edit(pokemon){
    return this.http.put(`${this.API}/${pokemon.id}`, pokemon).pipe(take(1));
  }

  save(pokemon){
    if(pokemon.id){
      return this.edit(pokemon);
    }
    return this.create(pokemon);
  }

}
  