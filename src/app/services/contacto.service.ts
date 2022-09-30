import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/interfaces/Contacto.interface';

import { Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor() {}

  getAll(sexoFilter?: string): Observable<IContacto[]> {

    if(sexoFilter === "Mujer" || sexoFilter === "Hombre"){
      let filteredList = CONTACTOS.filter((contact: IContacto) => contact.sexo === sexoFilter)
      return of(filteredList);
    }

    return of(CONTACTOS)
  }

  getContactById(id: number): Observable<IContacto> | undefined  {

    const contacto = CONTACTOS.find(
      (contacto: IContacto) => contacto.id === id
    );

    let observable : Observable<IContacto> = new Observable(observer => {
      observer.next(contacto); //emite un valor a todo componente subscripto
      observer.complete(); // no emitir mas valores
    })
    if (contacto) {
      return observable;
    }
    return;
  }
}
