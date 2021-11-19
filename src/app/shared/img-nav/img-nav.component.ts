import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-nav',
  templateUrl: './img-nav.component.html',
  styleUrls: ['./img-nav.component.sass']
})
export class ImgNavComponent implements OnInit {
   /* --------Inputs de renderización del componente-------*/
  @Input() elements: Array<any> = []
  /*
    element:
    {
      img: string (ruta de la imágen del elemento)
      title: string (título del elmento)
      route: string: (Ruta a la que se desea navegar al dar click)
    }
  */
  constructor() { }

  ngOnInit(): void {
  }

}
