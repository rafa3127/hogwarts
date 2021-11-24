import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule) },
  { path: 'houses', loadChildren: () => import("./modules/houses/houses.module").then(m => m.HousesModule) },
  { path: 'students', loadChildren: () => import("./modules/students/students.module").then(m => m.StudentsModule) },
  { path: 'staff', loadChildren: () => import("./modules/staff/staff.module").then(m => m.StaffModule) },
  { path: 'applications', loadChildren: () => import("./modules/applications/applications.module").then(m => m.ApplicationsModule) },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
