import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { pokemon } from '../pokemon';
import { TemplateDrivenService } from '../template-driven.service';

@Component({
  selector: 'app-template-driven-list',
  templateUrl: './template-driven-list.component.html',
  styleUrls: ['./template-driven-list.component.css']
})
export class TemplateDrivenListComponent implements OnInit {

  pokemons$: Observable<pokemon[]>;
  pokemonEscolhido : pokemon;

  error$ = new Subject<boolean>(); // Subject ele é capaz de emitir valor, e nesta caso é booleano devido ap ngIf do template que trata o erro.

  constructor(private service: TemplateDrivenService,
    private alertService: AlertModalService,
    private router: Router) { }

  ngOnInit(): void {
    this.pokemons$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        //this.error$.next(true);
        return of();  
      })
    );
  }

  onDelete(pokemon){
    console.log("entrou")
    this.pokemonEscolhido = pokemon;
    this.service.remove(this.pokemonEscolhido.id).subscribe(
      success => {
        console.log("success");
        this.alertService.mostrarMensagemInfo(this.pokemonEscolhido.nome+" removido com sucesso!")
        this.onRefresh();
      },
      error => {
        console.log("error")
      }
    );
  }

  onEdit(pokemonId){
    this.router.navigateByUrl(`/template-driven/editar/${pokemonId}`);
  }

  onRefresh() {
    //window.location.reload();
    this.pokemons$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        return of();
      })
    );
  }

}
