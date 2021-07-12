import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertModalService } from "../shared/alert-modal.service";
import { DataDrivenService } from "./data-driven.service";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { pokeApiService } from "../shared/pokeApi.service";

@Component({
  selector: "app-data-driven",
  templateUrl: "./data-driven.component.html",
  styleUrls: ["./data-driven.component.css"],
})
export class DataDrivenComponent implements OnInit {
  pokemonForm: FormGroup;
  submitted = false;
  teste : any;

  constructor(
    private formBuilder: FormBuilder,
    private formService: DataDrivenService,
    private location: Location,
    private modal: AlertModalService,
    private route: ActivatedRoute,
    private router: Router,
    private pokeApiService: pokeApiService,
  ) {}

  ngOnInit(): void {

    console.log("oi");
    //Após usar o resolver guard
    // this.route.params
    // .pipe(
    //   map((params: any) => params['id']),
    //   switchMap(id => this.formService.loadById(id))
    // )
    // .subscribe(pokemon => this.updateForm(pokemon));

    this.pokeApiService.consultaPokemons().subscribe(
      (dados) => {
        this.teste = dados
      }
    );
      
  
    

  if(this.router.url != "/data-driven"){
    console.log("oi");
    this.route.params.pipe(
      map((params: any) => params['id']),
      switchMap(id => this.formService.loadById(id))
      ).subscribe
    (
      pokemon => this.updateForm(pokemon));
    }

    const pokemon = this.route.snapshot.data['pokemon']
    console.log(pokemon);
    this.pokemonForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      tipo: [null, [Validators.required]],
    });
    console.log("Abaixo");
    console.log(this.pokemonForm.value.id);
  }

  updateForm(pokemon){
    this.pokemonForm.patchValue({
      id: pokemon.id,
      nome: pokemon.nome,
      tipo: pokemon.tipo
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.pokemonForm.valid) {
      console.log(this.pokemonForm.value);

      let msgSucess = "Pokemon " + this.pokemonForm.value.nome + " criado com sucesso!";
      let msgError = "Erro ao criar pokemon!";
      if(this.pokemonForm.value.id){
        msgSucess = "Pokemon " + this.pokemonForm.value.nome + " atualizado com sucesso!";
        msgError = "Erro ao atualizar pokemon!";
      }

      this.formService.save(this.pokemonForm.value).subscribe(
        (success) => {
          this.modal.mostrarMensagemSucesso(msgSucess);
          this.location.back();
        },
        (error) => this.modal.mostrarMensagemError(msgError)
      );

      
      /*
      if(this.pokemonForm.value.id){
        this.formService.edit(this.pokemonForm.value).subscribe(
          (success) => {
            this.modal.mostrarMensagemSucesso(
              "Pokemon " + this.pokemonForm.value.nome + " atualizado com sucesso!"
            );
            this.location.back();
          },
          (error) => this.modal.mostrarMensagemError("Erro ao atualizar pokemon!")
        );
      }
      else{
        this.formService
        .create(this.pokemonForm.value) // Metodos http retornam observable, por isso o subscribe.
        .subscribe(
          (success) => {
            this.modal.mostrarMensagemSucesso(
              "Pokemon " + this.pokemonForm.value.nome + " criado com sucesso!"
            );
            this.location.back();
          },
          (error) => this.modal.mostrarMensagemError("Erro ao criar pokemon!")
        );

      //this.router.navigate(['/data-driven-list']);
      }
      */
    }
  }

  

  resetar() {
    this.submitted = false;
    this.pokemonForm.reset();
  }

  temErro(campo: string) {
    return this.pokemonForm.get(campo).errors;
  }
}
