import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  _baseUrl = "http://localhost:8085"

  constructor(private http:HttpClient) { }

  generateToken(credentials:any){
    return this.http.post(`${this._baseUrl}/login`,credentials)
  }


  loginUser(token: string){
    localStorage.setItem("token", token)
    return true;
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token == undefined || token === '' || token == null){
      return false;
    }else{
      return true;
    }
  }

  logOut(){
    localStorage.removeItem("token")
    return true;
  }

  getToken(){
    return localStorage.getItem("token")
  }
}
