import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemon } from './pokemon';

import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataDrivenService {

  private readonly API = 'http://localhost:3000/pokemon'

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<pokemon[]>(this.API)
    .pipe( 
      tap(console.log)
    )
  }
  //tap com intuito de debugar  

}
