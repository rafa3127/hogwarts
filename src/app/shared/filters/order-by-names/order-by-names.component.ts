import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharactersService } from 'src/app/core/characters.service';

@Component({
  selector: 'app-order-by-names',
  templateUrl: './order-by-names.component.html',
  styleUrls: ['./order-by-names.component.sass']
})
export class OrderByNamesComponent implements OnInit {
  /* --------Inputs de renderización del componente-------*/
  @Input() characters: Array<any> = []
  /*--------------Emisor de eventos a componentes padres---------*/
  @Output() orderByName: EventEmitter<any> = new EventEmitter<any> () 
  constructor(
    private charactersService : CharactersService
  ) { }

  ngOnInit(): void {
  }
  /*------------------------Funciones-----------------------*/
  /*
    Recibe un arreglo de personajes (desde componente padre) y lo ordena el nombre utilizando función de charactersService
    params:
            character: Array (arreglo de personajes a ordenar)
            reverse: boolean (si true, ordena la lista en orden reverso)
  */
  orderByNameFunction(characters: Array<any>, reverse: boolean = false) {
    var newCharacterArray = this.charactersService.orderByName(characters,reverse)
    this.orderByName.emit(newCharacterArray)
  }

}
