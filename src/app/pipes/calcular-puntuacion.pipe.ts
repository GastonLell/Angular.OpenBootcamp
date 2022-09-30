import { Pipe, PipeTransform } from '@angular/core';
import { IJugador } from '../models/interfaces/Jugador.interface';

@Pipe({
  name: 'calcularPuntuacion'
})
export class CalcularPuntuacionPipe implements PipeTransform {

  transform(jugador: IJugador, ...args: unknown[]): string {
    let puntuacionTotal: number = 0;
    jugador.puntos.forEach((punto: number) => {
      puntuacionTotal += punto
    })
    return `El jugador ${jugador.nombre} ha conseguido ${puntuacionTotal} puntos en total`;
  }

}
