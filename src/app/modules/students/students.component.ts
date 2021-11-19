import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/core/characters.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {
  characters: Array<any> //arreglo de personajes
  loading: boolean = false //Flag de carga
  loaderFunction: Function //Función de reinicio de arreglo de personajes
  constructor(
    public activeRoute:ActivatedRoute,
    private charactersService: CharactersService
  ) { 
    this.characters = []
    this.loaderFunction = this.charactersService.getStudents
  }

  ngOnInit(): void {
    //se corre la función loadStudents para la primera carga de personajes
    this.loadStudents()
  }

  /*------------------------Funciones------------------------*/

  /* 
    Se obtienen los personajes
  */
  loadStudents(){
    this.loading = true
    this.charactersService.getStudents().subscribe( data =>{
      this.characters = data.map( (c:any) => this.charactersService.filterCharacterData(c))
      this.loading = false
    })
  }
  /*  
    Se carga el arreglo de personajes al recibir un evento de componente compartido de filtros
  */
  filter(characters: Array<any>){
    this.characters = characters
  }
}
