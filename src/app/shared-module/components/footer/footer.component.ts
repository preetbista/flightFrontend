import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { StateService } from 'src/app/service/state.service';
import { Subscription,map } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy  {
  public showFooter: boolean = true;
  // private showFooterSubscription: Subscription;

  constructor(private _stateService: StateService){
    this._stateService.showFooter.pipe(takeUntilDestroyed()).subscribe(res => {
      this.showFooter = res;
    })

  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
