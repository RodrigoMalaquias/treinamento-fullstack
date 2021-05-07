import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataDrivenService } from '../data-driven.service';
import { pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataResolverGuard implements Resolve<pokemon> {
  constructor(private service: DataDrivenService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<pokemon> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

    return of({
      id: null,
      nome: null,
      tipo: null
    });
  }
}

