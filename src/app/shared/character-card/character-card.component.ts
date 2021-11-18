import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass']
})
export class CharacterCardComponent implements OnInit {
  @Input() name : string = ""
  @Input() img : string = ""
  @Input() age: string = ""
  @Input() patronus: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
