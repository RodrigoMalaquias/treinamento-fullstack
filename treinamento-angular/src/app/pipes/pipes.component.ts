import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  pokemon : any = {
    nome: 'Pikachu',
    elemento: 'TROVÃO',
    raridade: 3.83254,
    nascimento : new Date(2021,0,1),
    foto: 'https://aux.iconspalace.com/uploads/2116404522463441715.png'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
