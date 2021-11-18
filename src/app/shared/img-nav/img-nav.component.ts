import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-nav',
  templateUrl: './img-nav.component.html',
  styleUrls: ['./img-nav.component.sass']
})
export class ImgNavComponent implements OnInit {
  /*
    element:
    {
      img: string:image-root,
      title: string
      route: string: route
    }
  */
  @Input() elements: Array<any> = []
  constructor() { }

  ngOnInit(): void {
  }

}
