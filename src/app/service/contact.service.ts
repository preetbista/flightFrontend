import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Contact } from '../admin/viewcontact/viewcontact.component';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  _baseUrl = 'http://localhost:8095'

  constructor(private http:HttpClient) { }

  getContacts() : Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this._baseUrl}/contact`)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error("Contacts cannot be retrieved"));
  }
}
