import { Component, OnInit } from '@angular/core';
import { DataDrivenService } from '../data-driven.service';
import { pokemon } from '../pokemon';

@Component({
  selector: 'app-data-driven-list',
  templateUrl: './data-driven-list.component.html',
  styleUrls: ['./data-driven-list.component.css'],
  preserveWhitespaces: true
})
export class DataDrivenListComponent implements OnInit {

  pokemons: pokemon[];

  constructor(private service: DataDrivenService) { }

  ngOnInit(): void {
    this.service.list().subscribe(
      dados => this.pokemons = dados
    );
  }
  //Subscribe é como se fosse uma inscrição para aguardar novos dados
  

}
