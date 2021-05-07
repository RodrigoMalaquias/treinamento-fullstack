import { Component, OnInit } from '@angular/core';

import { empty, Observable, of, Subject } from 'rxjs';
import { DataDrivenService } from '../data-driven.service';
import { pokemon } from '../pokemon';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-data-driven-list',
  templateUrl: './data-driven-list.component.html',
  styleUrls: ['./data-driven-list.component.css'],
  preserveWhitespaces: true
})
export class DataDrivenListComponent implements OnInit {

  //pokemons: pokemon[];

  pokemons$: Observable<pokemon[]>;
  pokemonEscolhido : pokemon;
  
  modalMsg: BsModalRef;

  error$ = new Subject<boolean>(); // Subject ele é capaz de emitir valor, e nesta caso é booleano devido ap ngIf do template que trata o erro.

  bsModalRef: BsModalRef;

  

  constructor(private service: DataDrivenService,
    private modalService: BsModalService, 
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    // this.service.list().subscribe(
    //   dados => this.pokemons = dados
    // );

    //trocamos pelo observable

    this.pokemons$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        //this.error$.next(true);
        this.ocorreErro();
        return of();  
      })
    );
  }

  onDelete(pokemon){
    this.pokemonEscolhido = pokemon;
    this.service.remove(this.pokemonEscolhido.id).subscribe(
      seccess => {
        console.log("success");
        this.alertService.mostrarMensagemInfo(this.pokemonEscolhido.nome+" removido com sucesso!")
        this.onRefresh();
      },
      error => {
        console.log("error")
      }
    );
  }

  onRefresh() {
    //window.location.reload();
    this.pokemons$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        this.ocorreErro();
        return of();
      })
    );
  }

  onEdit(pokemonId){
    this.router.navigateByUrl(`/data-driven/editar/${pokemonId}`);
  }

  ocorreErro(){
    this.alertService.mostrarMensagemError('Erro ao carregar seus pokemons!');
  }

}
