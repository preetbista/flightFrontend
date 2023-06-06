import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  _baseUrl  = 'http://localhost:8085'

  constructor(private http:HttpClient) {}

  getUser(){
    return this.http.get(`${this._baseUrl}/users`)
  }

}
