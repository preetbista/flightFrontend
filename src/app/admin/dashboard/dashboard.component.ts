import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { StateService } from 'src/app/service/state.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{

  public loggedIn = false;
  user:any
  constructor(private _userService: UserService, private _loginService:LoginServiceService, private _stateService: StateService){}
  ngOnInit(): void {
    this._stateService.showHeader.next(false);
    this._stateService.showFooter.next(false);
  }
  ngOnDestroy(): void {
    this._stateService.showHeader.next(true);
    this._stateService.showFooter.next(true);
  }
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
