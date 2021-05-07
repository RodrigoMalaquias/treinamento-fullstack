import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  pokemonForm: FormGroup;


  resetar(){
    this.pokemonForm.reset();
  }

  onSubmit(){
    console.log(this.pokemonForm.value);
    this.pokemonForm.reset();
  }

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.pokemonForm = this.formBuilder.group({
      id: [null],
      nome:[null,[Validators.required]],
      tipo:[null,[Validators.required]]
    });
    console.log(this.pokemonForm);
  }



}
