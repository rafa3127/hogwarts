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

  getCharactersByHouse(house: string){
    return this.api.get(`characters/house/${house}`,{})
  }

  getStudents(){
    return this.api.get("characters/students",{})
  }
  
  getStaff(){
    return this.api.get("characters/staff",{})
  }
}
