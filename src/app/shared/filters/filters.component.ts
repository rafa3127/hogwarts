import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharactersService } from 'src/app/core/characters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {
  /*--------------Inputs de renderización del componente---------*/
  @Input() characters: Array<any> = [] //Arreglo de personajes 
  @Input() loaderFunction: Function = ()=>{} //Función de reinicio de arreglo de personajes del componente padre

  /*--------------Emisor de eventos a componentes padres---------*/
  @Output() filter: EventEmitter<Array<any>> = new EventEmitter<Array<any>>()
  
  constructor(
    private charactersService:CharactersService)
    { }
    
    ngOnInit(): void {
    }
    
    
  /*------------------------Funciones-----------------------*/

  /* 
    recibe los arreglos de caracteres enviados en eventos de componentes hijos y los emite al componente padre
    params:
          characters: Array (arreglo de personajes filtrado u ordenado por componentes hijos)
  */
  filterFunction(characters: Array<any>){
    this.filter.emit(characters)
  }
}
