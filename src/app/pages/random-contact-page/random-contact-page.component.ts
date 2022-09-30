import { Component, OnInit } from '@angular/core';
import {
  IRandomContact,
  Results,
} from 'src/app/models/interfaces/RandomUser.interface';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.css'],
})
export class RandomContactPageComponent implements OnInit {
  randomContact: IRandomContact | undefined;
  randomContacts: Results[] | undefined;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.obtenerNuevoContacto();
  }

  obtenerNuevoContacto() {
    this.randomUserService.obtenerRandomContact().subscribe(
      {
        next:(response: Results) => this.randomContact = response.results[0],
        error: (error: any) => console.log(`Error ${error}`),
        complete: () => console.log('Peticion de random contact terminada')
      }
    )
  }


  obtenerListaContactos(n: number){
    this.randomUserService.obtenerRandomContacts(n).subscribe(
      {
        next:(response: Results) => console.log( response),
        error: (error: any) => console.log(`Error ${error}`),
        complete: () => console.log('Peticion de random contact terminada')
      }
    )
  }
}
