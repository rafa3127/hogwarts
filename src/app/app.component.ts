import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Hogwarts';
  navElements: Array<any> = [
    {route:"/home", linkName:"Inicio", exact:true},
    {route:"/houses", linkName:"Casas"},
    {route:"/students", linkName:"Estudiantes"},
    {route:"/staff", linkName:"Profesores"}, 
    {route:"/applications", linkName:"Solicitudes"}, 
  ] //Elementos de la barra de navegación


}
