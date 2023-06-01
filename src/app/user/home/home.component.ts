import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeApiService } from 'src/app/api/home.api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private _router: Router, private _apiService: HomeApiService) {}

  public login() {
    this._apiService.login().subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
      },
      error: (error) => {debugger}
    })
  }
  public bookFlightEvent(): void {
    this._apiService.getUsers().subscribe({
      next: (res) => {
        debugger
      },
      error: (err) => {debugger}
    })

    // this._router.navigate(['book-flight'])
  }

}
