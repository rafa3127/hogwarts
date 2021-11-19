import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-character-card',
  templateUrl: './grid-character-card.component.html',
  styleUrls: ['./grid-character-card.component.sass']
})
export class GridCharacterCardComponent implements OnInit {
  /* --------Inputs de renderización del componente-------*/  
  @Input() characters: Array<any> = [] //Arreglo de personajes a renderizar
  constructor() { }

  ngOnInit(): void {
  }

}
