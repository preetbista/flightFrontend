import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user:any
  constructor(private _userService: UserService){}
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
}
