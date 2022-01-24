import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  @Output() onNuevo: EventEmitter<Personaje> = new EventEmitter();

  Agregar(){
    if (this.nuevo.nombre.trim().length === 0) {
      return
    }
    else{
      this.onNuevo.emit(this.nuevo)
      this.nuevo ={
        nombre : '',
        poder : 0
      }
    }
  }

}
