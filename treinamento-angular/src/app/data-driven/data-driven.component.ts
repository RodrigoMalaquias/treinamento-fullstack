import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalService } from '../shared/alert-modal.service';
import { DataDrivenService } from './data-driven.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  pokemonForm: FormGroup;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private formService: DataDrivenService,
    private location: Location,
    private modal: AlertModalService
  ) { }

  ngOnInit(): void {

    this.pokemonForm = this.formBuilder.group({
      nome:[null,[Validators.required]],
      tipo:[null,[Validators.required]]
    });
    console.log(this.pokemonForm);
  }

  
  onSubmit(){
    this.submitted = true;
    console.log(this.pokemonForm.value);
    this.formService.create(this.pokemonForm.value) // Metodos http retornam observable, por isso o subscribe.
    .subscribe(
      success => {
        this.modal.mostrarMensagemSucesso('Pokemon '+this.pokemonForm.value.nome+" criado com sucesso!")
        this.location.back();
      },
      error => this.modal.mostrarMensagemError('Erro ao criar pokemon!')
    ); 
    
    //this.router.navigate(['/data-driven-list']);
  }

  resetar(){
    this.submitted = false;
    this.pokemonForm.reset();
  }



  temErro(campo: string){
    return this.pokemonForm.get(campo).errors;
  }

}
