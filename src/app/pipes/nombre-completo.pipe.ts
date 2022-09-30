import { Pipe, PipeTransform } from '@angular/core';
import { IRandomContact } from '../models/interfaces/RandomUser.interface';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contact: IRandomContact, ...args: unknown[]): string {
    return `${contact.name.title} ${contact.name.first} ${contact.name.last}`;
  }

}
