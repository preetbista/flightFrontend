import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Seatinterface } from './seatinterface';

@Injectable({
  providedIn: 'root'
})
export class SeatserviceService {
  _baseUrl  = 'http://localhost:8085'

  constructor(private _http:HttpClient) { }

  getSeatName() : Observable<Seatinterface[]>{
    return this._http.get<Seatinterface[]>(`${this._baseUrl}/cabins`)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error("Seats cannot be retrieved"));
  }
}
