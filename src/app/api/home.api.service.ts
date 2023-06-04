import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {
  private _url = 'http://localhost:8085/users';
  private _loginUrl = 'http://localhost:8085/login';

  constructor(private _httpClient:HttpClient) { }


  public login(): Observable<any> {
    return this._httpClient.post(this._loginUrl, {
      userName:'preetbista',
      password: 'preetbista'
    })
  }
  public getUsers(): Observable<any> {
    return this._httpClient.get<any>(this._url);
  }
}

