import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor : number;

  @Output() valorAlterado = new EventEmitter();

  dobro(){
    this.valor = this.valor * 2;
    this.valorAlterado.emit( { novoValor: this.valor } );
  }

  metade(){
    this.valor = this.valor / 2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
