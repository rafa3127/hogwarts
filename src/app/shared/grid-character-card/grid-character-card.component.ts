import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-character-card',
  templateUrl: './grid-character-card.component.html',
  styleUrls: ['./grid-character-card.component.sass']
})
export class GridCharacterCardComponent implements OnInit {

  @Input() characters: Array<any> = []
  constructor() { }

  ngOnInit(): void {
  }

}
