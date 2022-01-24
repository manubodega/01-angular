import { dbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 7500
    },
    {
      nombre: "Krillin",
      poder: 700
    }
  ]
  nuevo:Personaje ={
    nombre:'',
    poder:0
  }

  AgregarNuevo(argumento: Personaje){
    this.personajes.push(argumento)
  }

  constructor(private dbzService:dbzService){

  }



}
