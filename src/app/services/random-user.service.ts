import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IRandomContact, Results } from '../models/interfaces/RandomUser.interface';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.status === 0) {
      console.error(`Ha ocurrido un error: ${error.error}`)
    } else {
      console.error(`Error del servidor ${error.status} El error es: ${error.error}`)
    }
    return throwError(() => new Error("Error en la peticion de contacto aleatorio"))
  }
  obtenerRandomContact() : Observable<Results>{
    return this.http.get<Results>('https://randomuser.me/api/').pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  obtenerRandomContacts(n: number, sexo?: string) : Observable<Results> {
    let baseUrl = 'https://randomuser.me/api/'
    let params: HttpParams = new HttpParams().set("results", n)
    if(sexo){
      params = params.append('gender', sexo)
    }
    return this.http.get<Results>(baseUrl, {params: params}).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

}
