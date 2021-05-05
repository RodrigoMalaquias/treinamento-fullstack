import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-personalizadas',
  templateUrl: './diretivas-personalizadas.component.html',
  styleUrls: ['./diretivas-personalizadas.component.css']
})
export class DiretivasPersonalizadasComponent implements OnInit {

  //ngElse
  mostrarCurso: boolean = false;

  onMostrarCursos(){
    this.mostrarCurso = !this.mostrarCurso;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
