import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { CharactersService  } from 'src/app/core/characters.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.sass']
})
export class HousesComponent implements OnInit {
  house: string //Casa de la cual se requieren los personajes
  characters: any //arreglo de personajes de la casa seleccionada
  loading: boolean = false //Flag de carga
  loaderFunction: Function  //Función de reinicio de arreglo de personajes
  slideElements: Array<any> = [
    {title: "Slytherin",
     img: "./assets/houses/Slytherin.png",
     subtitle: ""},
    {title: "Gryffindor",
     img: "./assets/houses/Gryffindor.png",
     subtitle: ""},
    {title: "Hufflepuff",
     img: "./assets/houses/Hufflepuff.png",
     subtitle: ""},
    {title: "Ravenclaw",
     img: "./assets/houses/Ravenclaw.png",
     subtitle: ""},
  ] //Elementos para el renderizado de la barra de navegación con imágenes
  
  constructor(
    public activeRoute:ActivatedRoute,
    private charactersService: CharactersService
    ) { 
    this.house = ""
    this.characters = []
    this.loaderFunction = () => this.charactersService.getCharactersByHouse(`${this.house}`) //Se declara una arrow function para poder enviar el parámetro "house" a componentes hijos
  }
  
  ngOnInit(): void {
  //Se corre la función loadCharacters para la primera carga de personajes, extrayendo los parámetros por URL
  
    this.activeRoute.paramMap.subscribe( params => {
      this.house = JSON.parse(this.activeRoute.snapshot.params["house"]) ? JSON.parse(this.activeRoute.snapshot.params["house"]).house : ""
      if(this.house !== ""){
        this.loadCharacters()
      }else{
        this.characters = []
      }
    })
  }

  /*------------------------Funciones------------------------*/

  /* 
    Se obtienen los personajes de la casa seleccionada a través de charactersService
  */
  loadCharacters(): any{
    this.loading = true
    this.charactersService.getCharactersByHouse(this.house).subscribe( data =>{
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
