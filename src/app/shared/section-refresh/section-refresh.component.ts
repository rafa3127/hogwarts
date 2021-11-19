import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-refresh',
  templateUrl: './section-refresh.component.html',
  styleUrls: ['./section-refresh.component.sass']
})
export class SectionRefreshComponent implements OnInit {
 /* --------Inputs de renderización del componente-------*/
  @Input() route: string = "" //Ruta a recargar
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
 /*------------------------Funciones-----------------------*/

  /* 
    refresca el componente reingresando por url
    params:
          url: string (ruta a refrescar)
  */
  navigate(url:string){
    this.router.navigateByUrl('/',{skipLocationChange: true}).then(
      () => this.router.navigateByUrl(url)
    )
  }

}
