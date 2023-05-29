import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router) {}
  ngOnInit(): void {
   this.showSlides(this.slideIndex);
  }

  public bookFlightEvent(): void {
    this._router.navigate(['book-flight'])
  }

  public slideIndex = 1;
  // this.showSlides(slideIndex);

  // Next/previous controls
  public plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  public currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  public showSlides(n: number) {
    let i: number;

    let slides = Array.from(document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>);
    let dots = Array.from(document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>);

    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
  }



}
