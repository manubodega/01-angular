import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public heroes: string[] = ['Hulk', 'Spiderman', 'Thor', 'Ironman', 'C. América']
  public borrado: string = ''
  public b = false;
  public borrarHeroe(){
    this.borrado = this.heroes.shift() || '';
    this.b = true;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
