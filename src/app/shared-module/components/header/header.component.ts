import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { StateService } from 'src/app/service/state.service';
import { UserService } from 'src/app/service/user.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit, OnDestroy{
  public loggedIn = false;

  selectedImage = '../../../assets/images/avatar3.png';
  loggedInUsername: string;
  public showHeader = true;
  private subscriptions: Subscription;
  private headerShowSubscrition: Subscription;


  constructor(
    private loginService: LoginServiceService,
    private _userService: UserService,
    private _stateService: StateService
    ) {

      this.subscriptions = new Subscription();
    }

    ngOnInit(): void {
      this.loggedIn = this.loginService.isLoggedIn()
      this.headerShowSubscrition = this._stateService.showHeader.subscribe(res => {
        this.showHeader = res;
      });
      this.subscriptions.add(this.headerShowSubscrition);
    }


    logoutUser(){
      this.loginService.logOut()
      location.reload()
    }

    ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
    }
}
