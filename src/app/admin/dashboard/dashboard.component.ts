import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  public loggedIn = false;
  user:any
  constructor(private _userService: UserService, private _loginService:LoginServiceService){}
  getUser(){
    this._userService.getUser().subscribe(
      user =>{
          console.log(user)
          this.user = user
      },
      error => {
        console.log(error)
      }
    )
  }

  logoutUser(){
    this._loginService.logOut()
    location.reload()
    window.location.href = "auth/login"
  }



}
