import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemon } from './pokemon';

import { delay, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataDrivenService {

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

  remove(id){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
