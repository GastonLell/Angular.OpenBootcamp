import { Component, OnInit } from '@angular/core';

// tipo para ejemplo
type Producto = {
  nombre: string;
  precio: number;
  descripcion: string;
};
@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css'],
})
export class BasicListComponent implements OnInit {
  cargando: boolean = true;
  listaElementos: Producto[] = [
    { nombre: 'Leche', precio: 20, descripcion: 'Leche de vaca' },
    { nombre: 'Carne', precio: 40, descripcion: 'Carne de cerdo' },
    { nombre: 'Huevo', precio: 10, descripcion: 'Huevo de gallina feliz' },
  ];
  opcion: number = 0
  constructor() {}

  ngOnInit(): void {}
  cambiarCargando() {
    this.cargando = !this.cargando;
  }
  escogerOpcion(opcionEscogida: number){
    this.opcion = opcionEscogida;
  }
}
