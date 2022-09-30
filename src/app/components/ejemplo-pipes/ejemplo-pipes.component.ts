import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/interfaces/Contacto.interface';
import { IJugador } from 'src/app/models/interfaces/Jugador.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.css']
})
export class EjemploPipesComponent implements OnInit {

  dob: Date = new Date('1995,6,2');
  cambio: boolean = true;
  nombre: string = "Gaston";
  numero_PI: number = 3.1415926535897;
  precio_carrito: number = 100;
  // ejemplo para calcular puntuacion con custom pipe
  jugador1: IJugador = {
    nombre: 'Gaston',
    puntos: [10, 30, 45, 0]
  }
  jugador2: IJugador = {
    nombre: 'Martin',
    puntos: [20, 0, 5, 23]
  }
  cantidad: number = 0.35
  texto_largo: string = 'Hola, este sera un texto largo para poder utilizar el pipe slice'

  persona: IContacto = {id: 1, edad: 27, email: 'so_chini@email', sexo: 'Mujer', nombre: 'Sofia', apellidos: 'Chini', }
  constructor() { }

  ngOnInit(): void {
  }
  get dateFormat(): string{
    return this.cambio ? 'shortDate' : 'fullDate';
  }

  cambiarFormato(){
    this.cambio = !this.cambio;
  }
}
