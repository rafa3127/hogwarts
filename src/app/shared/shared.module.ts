import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ImgNavComponent } from './img-nav/img-nav.component';
import { TitleComponent } from './title/title.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { GridCharacterCardComponent } from './grid-character-card/grid-character-card.component';
import { FiltersComponent } from './filters/filters.component';
import { OrderByNamesComponent } from './filters/order-by-names/order-by-names.component';
import { OrderByAgeComponent } from './filters/order-by-age/order-by-age.component';
import { SearchComponent } from './filters/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionRefreshComponent } from './section-refresh/section-refresh.component';
import { ApplicationFormComponent } from './application-form/application-form.component';



/* ESTE MÓDULO DECLARA Y EXPORTA LOS COMPONENTES REUTILIZABLES */
@NgModule({
  declarations: [
    NavBarComponent,
    ImgNavComponent,
    TitleComponent,
    SpinnerComponent,
    CharacterCardComponent,
    GridCharacterCardComponent,
    FiltersComponent,
    OrderByNamesComponent,
    OrderByAgeComponent,
    SearchComponent,
    SectionRefreshComponent,
    ApplicationFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ApplicationFormComponent,
    NavBarComponent,
    ImgNavComponent,
    TitleComponent,
    SpinnerComponent,
    CharacterCardComponent,
    GridCharacterCardComponent,
    FiltersComponent,
    SearchComponent,
    SectionRefreshComponent,
  ]
})
export class SharedModule { }
