import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/api-config/api-config.service';
import { CharactersService } from 'src/app/core/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  /* --------Inputs de renderización del componente-------*/
  @Input() characters: Array<any> = [] //Arreglo de personajes
  @Input() loaderFunction: Function = ()=>{} //Función de reinicio del arreglo de personajes del componente padre
  /*--------------Emisor de eventos a componentes padres---------*/
  @Output() searchEmitter: EventEmitter<any> = new EventEmitter<any>()
  search = new FormControl("")
  constructor(
    private charactersService: CharactersService,
    private api: ApiService
  ) { }

  ngOnInit(): void {
  }
  /*------------------------Funciones-----------------------*/
  /*
    Ejecuta la función de reinicio de arreglo de personajes del componente padre y aplica la búsqueda solicitada
  */
  sendSearch(){
      this.loaderFunction().subscribe( (data: Array<any>) =>{
        var characterArray = data.map(c=>this.charactersService.filterCharacterData(c))
        var newCharactersArray = this.charactersService.search(characterArray, this.search.value)
        this.searchEmitter.emit(newCharactersArray)
      })
  
  }

}
