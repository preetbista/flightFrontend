
import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-admin',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AdminComponent implements OnInit, OnDestroy {
  private npDate: any;

  private engDate: any;

  constructor(private _stateService: StateService) {}

  ngOnInit(): void {

    this._stateService.showHeader.next(false);
    this._stateService.showFooter.next(false);
  }
  ngOnDestroy(): void {
    this._stateService.showHeader.next(true);
    this._stateService.showFooter.next(true);
  }


}
