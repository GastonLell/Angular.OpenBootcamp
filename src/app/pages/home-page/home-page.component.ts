import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IRandomContact } from 'src/app/models/interfaces/RandomUser.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  token: string | null = null;
  contact: IRandomContact | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    if(history.state.data){
      this.contact = history.state.data;
    }
  }

  navigateToContacts(): void{
    let navigateExtras: NavigationExtras = {
      queryParams: {
        sexo: 'Todos'
      }
    }
    this.router.navigate(['/dashboard/contacts'], navigateExtras)
  }

}
