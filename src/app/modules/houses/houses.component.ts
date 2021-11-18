import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService  } from 'src/app/core/characters.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.sass']
})
export class HousesComponent implements OnInit {
  house: string 
  characters: any 
  loading: boolean = false
  public slideElements: Array<any> = [
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
  ]
  
  constructor(
    public activeRoute:ActivatedRoute,
    private characterService: CharactersService
    ) { 
    this.house = ""
    this.characters = []
  }
  
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe( params => {
      this.house = JSON.parse(this.activeRoute.snapshot.params["house"]) ? JSON.parse(this.activeRoute.snapshot.params["house"]).house : ""
      this.loading = true
      console.log(this.house)
      if(this.house !== ""){
        this.search(this.house)
        this.loading = false
      }else{
        this.characters = []
        this.loading = false
      }
    })
  }

  search(house: string){
    this.characterService.getCharactersByHouse(this.house).subscribe( data =>{
      this.characters = data.map( (c:any) => {
        return (
          {
            name: c.name,
            patronus: c.patronus,
            img: c.image !== "" ? c.image : "./assets/user-not-found.png",
            age: c.yearOfBirth !== "" ? (new Date().getFullYear() - parseInt(c.yearOfBirth)).toString(): "No disponible"
          }
        )
      })
    })
  }

}
