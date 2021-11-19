import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses-nav',
  templateUrl: './houses-nav.component.html',
  styleUrls: ['./houses-nav.component.sass']
})
export class HousesNavComponent implements OnInit {
  public houses = [
    {title: "Gryffindor", img: "./assets/houses/Gryffindor.png", route: `/houses/house/${JSON.stringify({house:"gryffindor"})}`},
    {title: "Hufflepuff", img: "./assets/houses/Hufflepuff.png", route: `/houses/house/${JSON.stringify({house:"hufflepuff"})}`},
    {title: "Ravenclaw", img: "./assets/houses/Ravenclaw.png", route: `/houses/house/${JSON.stringify({house:"ravenclaw"})}`},
    {title: "Slytherin", img: "./assets/houses/Slytherin.png", route: `/houses/house/${JSON.stringify({house:"slytherin"})}`}
  ] //Parámetros para el render del componente compartido img-nav
  constructor() { }

  ngOnInit(): void {
  }

}
