import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/models/interfaces/Contacto.interface';
import { IRandomContact } from 'src/app/models/interfaces/RandomUser.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.css']
})
export class ContactDetailPageComponent implements OnInit {
  contact: IRandomContact | undefined;
  filter: string = "Todos"
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    if(history.state.data){
      this.contact = history.state.data;
    }
    if(history.state.filter){
      this.filter = history.state.filter;
    }
  }

}
