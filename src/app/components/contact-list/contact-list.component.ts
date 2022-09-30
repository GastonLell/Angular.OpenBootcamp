import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/interfaces/Contacto.interface';
import { IRandomContact, Results } from 'src/app/models/interfaces/RandomUser.interface';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit{

  @Input() contacts: IRandomContact[] | undefined;
  @Input() previousFilter: string = "Todos";

  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log(this.contacts)
  }

  selectFriend(contact: IRandomContact): void {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contact,
      },
    };
    this.router.navigate(['/dashboard'], navigationExtras);
  }
}
