import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../user/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  _baseUrl  = 'http://localhost:8085'

  constructor(private http:HttpClient) {}

  getUser(){
    return this.http.get(`${this._baseUrl}/users`)
  }

  getUserName() : Observable<User[]>{
    return this.http.get<User[]>(`${this._baseUrl}/users`)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error("Username cannot be retrieved"));
  }

}
