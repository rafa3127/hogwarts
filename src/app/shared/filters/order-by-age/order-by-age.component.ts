import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharactersService } from 'src/app/core/characters.service';

@Component({
  selector: 'app-order-by-age',
  templateUrl: './order-by-age.component.html',
  styleUrls: ['./order-by-age.component.sass']
})
export class OrderByAgeComponent implements OnInit {
  /* --------Inputs de renderización del componente-------*/
  @Input() characters: Array<any> = [] //Arreglo de personajes
  /*--------------Emisor de eventos a componentes padres---------*/
  @Output() orderByAge: EventEmitter<any> = new EventEmitter<any> () 

  constructor(
    private charactersService : CharactersService
  ) { }

  ngOnInit(): void {
  }

  /*------------------------Funciones-----------------------*/
  /*
    Recibe un arreglo de personajes (desde componente padre) y lo ordena según la edad utilizando función de charactersService
    params:
            character: Array (arreglo de personajes a ordenar)
            reverse: boolean (si true, ordena la lista en orden reverso)
  */
  orderByAgeFunction(characters: Array<any>, reverse: boolean = false) {
    var newCharacterArray = this.charactersService.orderByAge(characters,reverse)
    this.orderByAge.emit(newCharacterArray)
  }

}
