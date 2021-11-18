import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/core/characters.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.sass']
})
export class StaffComponent implements OnInit {
  characters: Array<any>
  constructor(
    public activeRoute:ActivatedRoute,
    private characterService: CharactersService
  ) {
    this.characters = []
  }

  ngOnInit(): void {
    this.loadStaff()
  }

  loadStaff(){
    this.characterService.getStaff().subscribe( data =>{
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
