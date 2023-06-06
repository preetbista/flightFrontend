import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit{
  public loggedIn = false;

  selectedImage = '../../../assets/images/avatar3.png';

  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
  }

  logoutUser(){
    this.loginService.logOut()
    location.reload()
  }
  showHeaderFooter:boolean = true
}
