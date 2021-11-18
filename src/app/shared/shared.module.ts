import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ImgNavComponent } from './img-nav/img-nav.component';
import { TitleComponent } from './title/title.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { GridCharacterCardComponent } from './grid-character-card/grid-character-card.component';



@NgModule({
  declarations: [
    NavBarComponent,
    ImgNavComponent,
    TitleComponent,
    SpinnerComponent,
    CharacterCardComponent,
    GridCharacterCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavBarComponent,
    ImgNavComponent,
    TitleComponent,
    SpinnerComponent,
    CharacterCardComponent,
    GridCharacterCardComponent,
  ]
})
export class SharedModule { }
