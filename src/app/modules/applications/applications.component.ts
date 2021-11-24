import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from 'src/app/core/applications.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.sass']
})
export class ApplicationsComponent implements OnInit {
  characters: Array<any> = []
  createModal: Boolean = false
  loaderFunction: Function
  constructor(
    private applicationsService: ApplicationsService
  ) {
    this.applicationsService.getApplications()
    this.loaderFunction = this.applicationsService.getApplications
   }

  ngOnInit(): void {
    this.loadCharacters()
  }
  toggleCreateModal(){
    this.createModal = !this.createModal
  }
  addApplication(){
    this.applicationsService.createApplication("Rafa","45","","")
  }

  createApplication(obj: any){
    const {name,age, patronus, img} = obj
    this.characters = this.applicationsService.createApplication(name, age, patronus, img)
    this.toggleCreateModal()
  }

  filter(characters: Array<any>){
    this.characters = characters
  }

  loadCharacters(){
    this.applicationsService.getApplications().subscribe(
      data => {
        this.characters = data
      }
    )
  }

}
