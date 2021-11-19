import { Injectable } from '@angular/core';
import { ApiService } from './api-config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  loading: boolean = false
  constructor(
    public api:ApiService,
  ) {
    
  }
  /*----------Funciones de integración con API externa----------- */

  /* 
    Hacer request a la API de personajes según las casas a las que pertenece
    params: house: string (casa de Hogwarts a la que pertenece)
    response: Function (request a la API)
  */
 getCharactersByHouse(house: string){
   return this.api.get(`characters/house/${house}`,{})
  }
  
  /* 
    Hacer request a la API de estudiantes
    response: Function (request a la API)
  */
 getStudents(){
   return this.api.get("characters/students",{})
  }
  
  /* 
    Hacer request a la API de Profesores
    response: Function (request a la API)
  */
  getStaff(){
    return this.api.get("characters/staff",{})
  }
  
  /*----------------Funciones auxiliares----------------- */

  /* Recibe un objeto de personaje como lo devuelve la API y lo transforma para guardar los datos que se manejan en la APP*/
  filterCharacterData(c: any){
    return (
      {
        name: c.name,
        patronus: c.patronus !== "" ? c.patronus : "No disponible",
        img: c.image !== "" ? c.image : "./assets/user-not-found.png",
        age: c.yearOfBirth !== "" ? (new Date().getFullYear() - parseInt(c.yearOfBirth)).toString(): "No disponible"
      }
      )
    }
    /*----------------Funciones Filtros----------------- */
    
    /* Recibe un arreglo de personajes y los ordena según el nombre
      params: character: Array (el arreglo de personajes a ordenar)
              reverse: Boolean (si True, devuelve el arreglo en orden reverso)
    */
   orderByName(characters:Array<any>, reverse: boolean = false){
     var newCharactersArray = characters.sort((a,b)=>{
       return a.name > b.name ? 1 : (a.name<b.name?-1 : 0)
      })
      return reverse ? newCharactersArray.reverse() : newCharactersArray
    }
    
    /* Recibe un arreglo de personajes y los ordena según la edad. También deja en los últimos elementos del arreglo los personajes cuya edad no está disponible
      params: character: Array (el arreglo de personajes a ordenar)
              reverse: Boolean (si True, devuelve el arreglo en orden reverso)
    */
   orderByAge(characters:Array<any>, reverse: boolean = false){
     var newCharactersArray = characters.sort((a,b)=>{
       return a.age=="No disponible" && b.age =="No disponible"? 0 : (a.age == "No disponible" ? 1 : b.age == "No disponible" ? -1 : ((parseInt(a.age) > parseInt(b.age) ? 1 : (parseInt(a.age)<parseInt(b.age)?-1 : 0))))
      })
      return reverse ? newCharactersArray.reverse().sort((a,b)=> a.age=="No disponible" && b.age =="No disponible"? 0 : (a.age == "No disponible" ? 1 : b.age == "No disponible" ? -1 : 0)): newCharactersArray
    }
    
    /* Recibe un arreglo de personajes y filtra a los personajes que contengan en su nombre o patronus un un valor de búsqueda
      params: character: Array (el arreglo de personajes a ordenar)
              search: string (Valor de búsqueda)
    */
  search(characters: Array<any>, search: string){
    var newCharactersArray = characters.filter(c => {
      return c.name.toUpperCase().includes(search.toUpperCase())||c.patronus.toUpperCase().includes(search.toUpperCase())})
    
    return newCharactersArray
  }

  
}
