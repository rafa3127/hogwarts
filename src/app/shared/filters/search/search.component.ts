import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/api-config/api-config.service';
import { ApplicationsService } from 'src/app/core/applications.service';
import { CharactersService } from 'src/app/core/characters.service';
import { UtilitiesService } from 'src/app/core/utilities.service';

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
    private applicationsService: ApplicationsService,
    private api: ApiService,
    private utilities: UtilitiesService
  ) { }

  ngOnInit(): void {
  }
  /*------------------------Funciones-----------------------*/
  /*
    Ejecuta la función de reinicio de arreglo de personajes del componente padre y aplica la búsqueda solicitada
  */
  sendSearch(){
      this.loaderFunction().subscribe( (data: Array<any>) =>{
        if(data[0].name && data[0].patronus && data[0].age && data[0].img){
          var characterArray:any = data
        }else{
          var characterArray:any = data.map(c=>this.charactersService.filterCharacterData(c))
        }
        var newCharactersArray = this.charactersService.search(characterArray, this.search.value)
        this.searchEmitter.emit(newCharactersArray)
      })
  
  }

}
