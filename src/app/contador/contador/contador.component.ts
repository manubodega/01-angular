import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{titulo}}</h1>
    <h3>La base es:<strong>{{base}}</strong></h3>

    <!-- <button (click)="numero = numero +1">+ 1</button> -->

    <button (click)="acumular(base)">+{{base}}</button>

    <span>{{numero}}</span>

    <!-- <button (click)="numero = numero - 1">- 1</button> -->
    <button (click)="acumular(-base)">-{{base}}</button>

  `
})

export class ContadorComponent{
  titulo: string = 'Contador App';
  numero: number = 10;
  public base: number = 5;

  // public sumar() {
  //   this.numero += 1;
  // }
  // public restar() {
  //   this.numero -= 1;
  // }
  public acumular(valor: number) {
    this.numero += valor;
  }

}
