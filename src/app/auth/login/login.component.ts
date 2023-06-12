
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginServiceService } from '../../service/login-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // constructor(private _router: Router, private _apiService: HomeApiService) {}

  // public login() {
  //   this._apiService.login().subscribe({
  //     next: (res) => {
  //       localStorage.setItem('token', res.token);
  //     },
  //     error: (error) => {debugger}
  //   })
  // }

  credentials = {
    userName: '',
    password: ''
  }

  constructor(private _loginService: LoginServiceService,private _userService:UserService , private _route:Router){

  }

  ngOnInit(): void {
    this.redirectToHomePageIfLoggedIn();
  }


  onSubmit(){
    if((this.credentials.userName !='' && this.credentials.password!='') && (this.credentials.userName!=null && this.credentials.password!= null)){
       this._loginService.generateToken(this.credentials)
       .subscribe((response:any) => {
          console.log(response)
          this._loginService.loginUser(response.token, response.username)
          // this._userService.setUser(response.username);
          this._route.navigate(['user', 'home']);

       },
       error => {
          console.log(error)
       })
    }else{
      console.log("Fields are empty");
    }
  }

  redirectToHomePageIfLoggedIn() {
    if (this._loginService.isLoggedIn()) {
      // window.location.href = "/user/home"
      this._route.navigate(['user', 'home']);
    }
  }

}


