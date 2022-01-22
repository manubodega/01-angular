import { Component } from '@angular/core';

@Component({//Decorador Componente de la clase App Componente
  selector: 'app-root',  //Nombre que el componente va a tener -> nombre del componente padre de nuestra app -> lo llama el index.html
  templateUrl: './app.component.html',
  // template: '<span>Manuel</span>',//se puede escribir código html si son pocas lineas en vez de las rutas
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-component'
}
