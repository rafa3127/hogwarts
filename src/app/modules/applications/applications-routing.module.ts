import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFormComponent } from 'src/app/shared/application-form/application-form.component';
import { ApplicationsComponent } from './applications.component';

const routes: Routes = [
  {path:"", component: ApplicationsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
