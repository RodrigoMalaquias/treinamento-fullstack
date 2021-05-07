import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertModalService } from "../shared/alert-modal.service";
import { DataDrivenService } from "./data-driven.service";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: "app-data-driven",
  templateUrl: "./data-driven.component.html",
  styleUrls: ["./data-driven.component.css"],
})
export class DataDrivenComponent implements OnInit {
  pokemonForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private formService: DataDrivenService,
    private location: Location,
    private modal: AlertModalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    //Após usar o resolver guard
    // this.route.params
    // .pipe(
    //   map((params: any) => params['id']),
    //   switchMap(id => this.formService.loadById(id))
    // )
    // .subscribe(pokemon => this.updateForm(pokemon));


  if(this.router.url != "/data-driven"){
    console.log("oi");
    this.route.params.pipe(
      map((params: any) => params['id']),
      switchMap(id => this.formService.loadById(id))
      ).subscribe
    (
      aluno => this.updateForm(aluno));
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
  }

  resetar() {
    this.submitted = false;
    this.pokemonForm.reset();
  }

  temErro(campo: string) {
    return this.pokemonForm.get(campo).errors;
  }
}
