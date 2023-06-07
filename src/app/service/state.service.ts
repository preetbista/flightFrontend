import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public showHeader = new BehaviorSubject<boolean>(true);
  public showFooter = new BehaviorSubject<boolean>(true);

  constructor() { }
}
