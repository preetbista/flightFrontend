
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginServiceService } from '../../service/login-service.service';
import { UserService } from 'src/app/service/user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  // constructor(private _router: Router, private _apiService: HomeApiService) {}

  // public login() {
  //   this._apiService.login().subscribe({
  //     next: (res) => {
  //       localStorage.setItem('token', res.token);
  //     },
  //     error: (error) => {debugger}
  //   })
  // }

  registerSubscription : Subscription;
  credentials = {
    userName: '',
    password: ''
  }

  informations = {
    userName: '',
    password: '',
    email: '',
    age: ''
  }

  constructor(private _loginService: LoginServiceService,private _userService:UserService , private _route:Router){

  }

  ngOnInit(): void {
    this.redirectToHomePageIfLoggedIn();
  }

  onSubmit(){
    if((this.credentials.userName !='' && this.credentials.password!='') && (this.credentials.userName!=null && this.credentials.password!= null)){
       this.registerSubscription =  this._loginService.generateToken(this.credentials)
       .subscribe((response:any) => {
          console.log(response)
          this._loginService.loginUser(response.token, response.username)
          if (response.username === 'preetbista') {
            this._route.navigate(['admin', 'dashboard']);
          } else {
            window.location.reload()
            this._route.navigate(['user', 'home']);
          }
       },
       error => {
          console.log(error)
       })
    }else{
      console.log("Fields are empty");
    }
  }

  onRegister(){
      if((this.informations.userName != '' && this.informations.password !='' && this.informations.age!=''
      && this.informations.email != '') && (this.informations.userName != null && this.informations.password !=null && this.informations.age!=null
      && this.informations.email != null)){
        this._loginService.registerUser(this.informations)
        .subscribe({
          next: (response: any) => {
            window.location.reload()
          },
          error: (error) => alert("Could not register. Try again")
        }
          )


      }
  }

  redirectToHomePageIfLoggedIn() {
    if (this._loginService.isLoggedIn()) {
      // window.location.href = "/user/home"
      this._route.navigate(['user', 'home']);
    }
  }

  position = 'top-end';
  visible = false;
  percentage = 0;

  toggleToast() {
    this.visible = !this.visible;
  }

  onVisibleChange($event: boolean) {
    this.visible = $event;
    this.percentage = !this.visible ? 0 : this.percentage;
  }

  onTimerChange($event: number) {
    this.percentage = $event * 25;
  }

  ngOnDestroy(): void {
      this.registerSubscription.unsubscribe();
  }

}


