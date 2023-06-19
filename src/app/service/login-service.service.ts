import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  _baseUrl = "http://localhost:8085"


  constructor(private http:HttpClient) {}

  generateToken(credentials:any){
    return this.http.post(`${this._baseUrl}/login`,credentials)
  }

  registerUser(informations:any){
    return this.http.post(`${this._baseUrl}/users/add`,informations)
  }

  loginUser(token: string, username:string){
    localStorage.setItem("token", token)
    localStorage.setItem("username", username)
    return true;
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");
    // if(token == undefined || token === '' || token == null){
    //   return false;
    // }else{
    //   return true;
    // }
    if(username == undefined || username === '' || username == null){
      return false;
    }else{
      return true;
    }
  }

  logOut(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    return true;
  }

  getToken(){
    return localStorage.getItem("token")
  }

  getUsername(){
    return localStorage.getItem("username")
  }

}
