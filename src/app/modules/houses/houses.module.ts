import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HousesNavComponent } from './houses-nav/houses-nav.component';






@NgModule({
  declarations: [
    HousesComponent,
    HousesNavComponent,
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
    SharedModule
  ]
})
export class HousesModule { }
