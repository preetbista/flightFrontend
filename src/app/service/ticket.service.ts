import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Ticket } from '../admin/ticket_table/ticket.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  _baseUrl = "http://localhost:8086"

  constructor(private http:HttpClient) { }

  getTickets() : Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${this._baseUrl}/passenger-info`)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error("Tickets cannot be retrieved"));
  }
}
