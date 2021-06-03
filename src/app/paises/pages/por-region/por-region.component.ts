
import { Component, OnInit } from '@angular/core';
import { PaisService } from './../../services/pais.service';
import { Countries } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva:string = "";

  paises:Countries[] = [];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  getRegion(region:string) {

    if(region == this.regionActiva) {return;}

    this.regionActiva = region;
    this.paises = [];
    this.paisService.getRegion(region).subscribe( data => {
      console.log(data);
      this.paises = data;

    });
  }

  getClassActivate(region:string) {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

}
