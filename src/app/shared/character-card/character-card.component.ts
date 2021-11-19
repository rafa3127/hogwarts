import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass']
})
export class CharacterCardComponent implements OnInit {
  /* --------Inputs de renderización del componente-------*/
  @Input() name : string = "" //Nombre del personaje
  @Input() img : string = "" //Ruta de la imagen del personaje
  @Input() age: string = "" //Edad del personaje
  @Input() patronus: string = "" //Patronus del personaje
  constructor() { }

  ngOnInit(): void {
  }

}
