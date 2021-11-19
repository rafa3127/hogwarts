import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit {
/* --------Inputs de renderización del componente-------*/
  @Input() title : string = "" //Título a renderizar
  
  constructor() { }

  ngOnInit(): void {
  }

}
