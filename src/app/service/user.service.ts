import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, BehaviorSubject } from 'rxjs';
import { User } from '../user/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  _baseUrl  = 'http://localhost:8085'

  constructor(private http:HttpClient) {

    let username = localStorage.getItem("username");
    if(username)this.setUser(username)
  }

  getUser(){
    return this.http.get(`${this._baseUrl}/users`)
  }

  getUserNames() : Observable<User[]>{
    return this.http.get<User[]>(`${this._baseUrl}/users`)
    .pipe(catchError(this.errorHandler));
  }

  usernameSubject = new BehaviorSubject<string>('');
  setUser(_username: string){
    this.usernameSubject.next(_username);
  }


  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error("Username cannot be retrieved"));
  }

}
