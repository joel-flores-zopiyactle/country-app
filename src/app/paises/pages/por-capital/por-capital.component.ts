import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino:string = "";
  isError:boolean = false;
  paises :Countries[] = [];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string) {
    this.isError = false;
    this.termino = termino
    console.log(this.termino);
    this.paisService.getCapital(termino)
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
  }

}
