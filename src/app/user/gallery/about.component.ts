import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren} from '@angular/core';
import { fromEvent } from 'rxjs';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // ngAfterViewInit(): void {
  //   debugger;

  // }
  // @ViewChild('test123') div: ElementRef;
  // @ViewChildren('data') data: ElementRef[];


  // public arrayData= [1,2,3];

  // navbarScrolled = false;

  // ngOnInit(): void {
  //   debugger;
  //   fromEvent(window, 'scroll').subscribe(() => {
  //     if (window.scrollY > 0) {
  //       this.navbarScrolled = true;
  //     } else {
  //       this.navbarScrolled = false;
  //     }
  //   });
  }

