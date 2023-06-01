import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.getToken();
    if(token){
      request = request.clone({
        setHeaders: {
          'UUID': token
        }
      })
    }
    debugger;
    return next.handle(request).pipe(catchError((error) => {debugger; return of()}) );
  }

  private getToken() {
    let data = localStorage.getItem('token') || null;
    return data;
  }
}


