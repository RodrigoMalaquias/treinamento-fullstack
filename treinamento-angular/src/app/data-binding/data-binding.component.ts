import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  name: string = "Rodrigo";
  urlImg = "https://avenue-stage.icons8.com/cotton/2x/laptop-coding.png"
  textNow = "";
  textSave = "";

  isMouseOver: boolean = false;

  nomeDoProcessador: string = "Ryzen 5 3600"

  novoValor :number = 4;

  person: any = {
    pais: "Brasil",
    continente: "América do Sul"
  }

  meClique(){
    alert("Botão clicado!");
  }

  onKeyUp(text: KeyboardEvent){
    this.textNow = (<HTMLInputElement>text.target).value;
  }

  salvaValor(text){
    this.textSave = text;
  }

  onMouserOverOut(){
    this.isMouseOver = !this.isMouseOver;  
  }

  onValorAlterado(evento){
    console.log(evento.novoValor);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
