import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  constructor(
    public utilities: UtilitiesService
  ) { }

  createApplication(name: string, age: string, patronus: string="No disponible", img: string = ""){
    const applications: Array<any> = this.utilities.jsonConverter(localStorage.getItem('applications')) ? this.utilities.jsonConverter(localStorage.getItem('applications')) : []
    applications.push(
      {
        name: name,
        patronus: patronus !== "" ? patronus : "No disponible",
        img: img !== "" ? img : "./assets/user-not-found.png",
        age: age !== "" ? age: "No disponible"
      }
    )
    localStorage.setItem('applications',JSON.stringify(applications))
    return applications
  }

  getApplications(): Observable<Array<any>>{
    var applications = this.utilities.jsonConverter(localStorage.getItem('applications')) ? this.utilities.jsonConverter(localStorage.getItem('applications')) : []
    const observe: Observable<Array<any>> = of(applications)
    return observe
  }


}
