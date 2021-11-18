import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/core/characters.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {
  characters: Array<any>
  constructor(
    public activeRoute:ActivatedRoute,
    private characterService: CharactersService
  ) { 
    this.characters = []
  }

  ngOnInit(): void {
    this.loadStudents()
  }
  loadStudents(){
    this.characterService.getStudents().subscribe( data =>{
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
