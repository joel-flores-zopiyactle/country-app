import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li {
      cursor:pointer;
    }`
  ]
})
export class PorPaisComponent implements OnInit {

  termino:string = "";
  isError:boolean = false;
  paises :Countries[] = [];
  paisesSugeridos :Countries[] = [];
  mostrarSugerencias:boolean = false;


  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string) {
    this.isError = false;
    this.termino = termino
    this.mostrarSugerencias = false;
    console.log(this.termino);
    this.paisService.getPais(termino)
    .subscribe( (paises) => {
      console.log(paises);
      this.paises = paises;

    }, (error) => {
      this.isError = true;
      this.paises = [];
    });
  }

  sugerencias(termino:string) {
    this.isError = false;
    this.mostrarSugerencias = true;
    this.termino = termino;
    this.paisService.getPais(termino).subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
    error => {
      this.paisesSugeridos = [];
    });
  }

}
