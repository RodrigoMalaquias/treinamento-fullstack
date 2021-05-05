import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  //ngIf
  times: string[] = [];

  existeTimes: boolean = false;

  imprimirTimes(){
    this.existeTimes = !this.existeTimes;
  }

  //ngSwitchCase
  regiao: string = "";

  //ngFor
  linguagens: string[] = ["C#","C++","Java","Python","Cobol"];

  //ngClass
  verificado: boolean = true;

  verificacao(){
    this.verificado = !this.verificado;
  }

  //ngStyle
  troca: boolean = true;

  realizarTroca(){
    this.troca = !this.troca;
  }

  
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.linguagens.length; i++){
      let linguagem = this.linguagens[i];
    }
  }

}
