import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter     :EventEmitter<string> = new EventEmitter();
  @Output() onDebounce  :EventEmitter<string> = new EventEmitter();
  @Input() placeholder:string = "";

  termino:string = "";
  debounce:Subject<string> = new Subject();

  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe( valor => {
      console.log(valor);

      this.onDebounce.emit(valor);
    })
  }

  buscar() {
    console.log(this.termino);
    this.onEnter.emit(this.termino);
  }

  teclaPresionado() {
    this.debounce.next(this.termino);
  }

  sugerencias() {

  }



}
