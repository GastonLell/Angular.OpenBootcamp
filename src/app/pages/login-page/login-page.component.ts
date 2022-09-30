import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  token: string | undefined;

  email: string = '';
  password: string = '';

  // 'eve.holt@reqres.in', 'password'
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    let token: string | null = sessionStorage.getItem('token');

    if(token){
      this.router.navigate(['/home'])
    }
  }

  loginUser(value: any): void{
    let {email, password} = value;

    this.authService.login(email, password).subscribe(
      ( resp )=> {
        if(resp.token) {
          sessionStorage.setItem('token', resp.token)
          this.router.navigate(['/dashboard'])
        }
      }
    ),
    (error:any) => console.error(`Ha habido un error al hacer login: ${error}`),
      () => console.info("Peticion de login finalizada")

  }

}
