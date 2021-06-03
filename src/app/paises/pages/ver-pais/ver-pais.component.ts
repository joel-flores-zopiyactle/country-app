import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Countries;

  constructor(
    private activedRoute:ActivatedRoute,
    private paiseService:PaisService
  ) { }

  ngOnInit(): void {

    this.activedRoute.params
    .pipe(switchMap( params => this.paiseService.getPaisCode(params.id)),
     tap(console.log))
    .subscribe( pais => this.pais = pais)

    /* this.activedRoute.params.subscribe( ({id}) => {
      console.log(id);

      this.paiseService.getPaisCode(id).subscribe(data => {
        console.log(data);

      })

    }) */

  }

}
