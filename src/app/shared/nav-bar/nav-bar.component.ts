import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  /* --------Inputs de renderización del componente-------*/
  @Input() elements : Array<any> = [] //elementos de la barra de navegación del componente padre
  /*
    elements = {
      route: string (ruta a la que se desea navegar al dar clic),
      linkName: string (Nombre del elmento de la barra de navegación),
      exact: boolean = false(default)  (si true, el elemento tendrá la clase active si la coincidencia con la ruta es exacta)
    }
  */
  constructor() { }

  ngOnInit(): void {
  }

}
