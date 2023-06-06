import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { LoginServiceService } from '../service/login-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _loginService:LoginServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newRequest = request;
    let token = this._loginService.getToken()

    if(token!=null){
      newRequest = newRequest.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(newRequest)
  }
    // const token = this.getToken();
    // if(token){
    //   request = request.clone({
    //     setHeaders: {
    //       'UUID': token
    //     }
    //   })
    // }
    // return next.handle(request).pipe(catchError((error) => {debugger; return of()}) );
  // private getToken() {
  //   let data = localStorage.getItem('token') || null;
  //   return data;
  // }
}


