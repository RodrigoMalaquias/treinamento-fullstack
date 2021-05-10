import { Component, OnInit } from '@angular/core';

import { AlertModalService } from '../shared/alert-modal.service';
import { TemplateDrivenService } from './template-driven.service';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { pokemon } from './pokemon';
import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
  preserveWhitespaces: true
})
export class TemplateDrivenComponent implements OnInit {

  pokemonAtual : pokemon = {
    id: null,
    nome: null,
    tipo: null
  };


  submitted = false;
  pokemonForm: FormGroup;

  constructor(private formService: TemplateDrivenService,
    private modal: AlertModalService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    
    if(this.router.url != "/template-driven"){
      console.log("oi");
      this.route.params.pipe(
        map((params: any) => params['id']),
        switchMap(id => this.formService.loadById(id))
        ).subscribe
       (
        pokemon => {
          this.pokemonAtual.nome = pokemon.nome,
          this.pokemonAtual.tipo = pokemon.tipo
        }
        );
      }

      
  }
  /*

      pokemon => this.pokemonForm.patchValue({
          id: pokemon.id,
          nome: pokemon.nome,
          tipo: pokemon.tipo
        }));

  this.pokemonForm.patchValue({
    id: pokemon.id,
    nome: pokemon.nome,
    tipo: pokemon.tipo
  });
*/
  onSubmit(pokemonForm){
    pokemonForm.patchValue({
      id: pokemonForm.id,
      nome: pokemonForm.nome,
      tipo: pokemonForm.tipo
    });
    /*
    if (pokemonForm.valid) {
      console.log(pokemonForm.value.id);

      let msgSucess = "Pokemon " + pokemonForm.value.nome + " criado com sucesso!";
      let msgError = "Erro ao criar pokemon!";
      if(pokemonForm.value.id){
        msgSucess = "Pokemon " + pokemonForm.value.nome + " atualizado com sucesso!";
        msgError = "Erro ao atualizar pokemon!";
      }

      this.formService.save(pokemonForm.value).subscribe(
        (success) => {
          this.modal.mostrarMensagemSucesso(msgSucess);
          this.location.back();
        },
        (error) => this.modal.mostrarMensagemError(msgError)
      );
    }
    */
  }

  resetar(pokemonForm) {
    this.submitted = false;
    pokemonForm.reset();
  }
  
  updateForm(dados, form){

  }
  
}
