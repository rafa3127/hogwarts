import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/core/characters.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.sass']
})
export class StaffComponent implements OnInit {
  loading: boolean = false //Flag de carga
  loaderFunction: Function //Función de reinicio de arreglo de personajes
  characters: Array<any> //arreglo de personajes
  constructor(
    public activeRoute:ActivatedRoute,
    private charactersService: CharactersService
  ) {
    this.characters = []
    this.loaderFunction = this.charactersService.getStaff
  }

  ngOnInit(): void {
    //se corre la función loadStaff para la primera carga de personajes
    this.loadStaff()
  }
  /*------------------------Funciones------------------------*/

  /* 
    Se obtienen los personajes
  */
  loadStaff(): any{
    this.loading = true
    this.charactersService.getStaff().subscribe( data =>{
      this.characters = data.map( (c:any) => this.charactersService.filterCharacterData(c))
      this.loading = false
      return this.characters
    })
  }
  /*  
    Se carga el arreglo de personajes al recibir un evento de componente compartido de filtros
  */
  filter(characters: Array<any>){
    this.characters = characters
  }


}
