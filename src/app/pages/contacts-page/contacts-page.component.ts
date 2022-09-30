import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IContacto } from 'src/app/models/interfaces/Contacto.interface';
import { IRandomContact, Results } from 'src/app/models/interfaces/RandomUser.interface';
import { ContactoService } from 'src/app/services/contacto.service';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {
  loadingContacts: boolean = true;
  randomContactsList: IRandomContact[] | undefined;
  contactSelected: IContacto | undefined = undefined;
  filterSexo: string | null = "Todos";
  // subscripcion de servicio
  private subscription = new Subject();
  constructor(private randomUserService: RandomUserService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.filterSexo = this.route.snapshot.queryParamMap.get('sexo')
    this.getContacts(this.filterSexo);

  }

  getContacts(filter: string | null){
    if(filter === 'male' || filter === 'female') {
      this.randomUserService.obtenerRandomContacts(10, filter).subscribe(
        {
          next:(response: Results) => {
            this.randomContactsList = response?.results
          },
          error: (error: any) => console.log(`Error ${error}`),
          complete: () => {
            console.log('Peticion de random contact terminada')
            this.loadingContacts = false;
          }
        }
      )
    } else {

      this.randomUserService.obtenerRandomContacts(10).subscribe(
        {
          next:(response: Results) => {
            this.randomContactsList = response?.results
          },
          error: (error: any) => console.log(`Error ${error}`),
          complete: () => {
            console.log('Peticion de random contact terminada')
            this.loadingContacts = false;
          }
        }
      )
    }

  }

  selectFriend(contact: IContacto):void{
    let navigationExtras: NavigationExtras = {
      state: {
        data: contact
      }
    }
    this.router.navigate(['/home'], navigationExtras)
  }
  ngOnDestroy(): void {
    this.subscription?.next(false);
    this.subscription?.complete();
  }

}
