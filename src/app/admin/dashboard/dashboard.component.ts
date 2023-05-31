import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit{
  @ViewChild('blob') blob: ElementRef;
  @ViewChild('blobPath') blobPath: ElementRef;
  @ViewChild('hamburger') hamburger: ElementRef;
  @ViewChild('h2') h2: ElementRef;

  height: number;
  x: number;
  y: number;
  curveX: number;
  curveY: number;
  targetX: number;
  xitteration: number;
  yitteration: number;
  menuExpanded: boolean;

  hoverZone: number;
  expandAmount: number;

  ngAfterViewInit() {
    this.height = window.innerHeight;
    this.x = 0;
    this.y = this.height / 2;
    this.curveX = 10;
    this.curveY = 0;
    this.targetX = 0;
    this.xitteration = 0;
    this.yitteration = 0;
    this.menuExpanded = false;

    this.hoverZone = 150;
    this.expandAmount = 20;

    this.svgCurve();
  }

  onMouseMove(event: MouseEvent) {
    this.x = event.pageX;
    this.y = event.pageY;
  }

  onHoverEnter() {
    this.menuExpanded = true;
  }

  onHoverLeave() {
    this.menuExpanded = false;
  }

  easeOutExpo(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
    return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
  }

  svgCurve() {
    if ((this.curveX > this.x - 1) && (this.curveX < this.x + 1)) {
      this.xitteration = 0;
    } else {
      if (this.menuExpanded) {
        this.targetX = 0;
      } else {
        this.xitteration = 0;
        if (this.x > this.hoverZone) {
          this.targetX = 0;
        } else {
          this.targetX = -(((60 + this.expandAmount) / 100) * (this.x - this.hoverZone));
        }
      }
      this.xitteration++;
    }

    if ((this.curveY > this.y - 1) && (this.curveY < this.y + 1)) {
      this.yitteration = 0;
    } else {
      this.yitteration = 0;
      this.yitteration++;
    }

    this.curveX = this.easeOutExpo(this.xitteration, this.curveX, this.targetX - this.curveX, 100);
    this.curveY = this.easeOutExpo(this.yitteration, this.curveY, this.y - this.curveY, 100);

    const anchorDistance = 200;
    const curviness = anchorDistance - 40;

    const newCurve2 = `M60,${this.height}H0V0h60v${this.curveY - anchorDistance}c0,${curviness},${this.curveX},${curviness},${this.curveX},${anchorDistance}S60,${this.curveY},60,${this.curveY + (anchorDistance * 2)}V${this.height}z`;

    this.blobPath.nativeElement.setAttribute('d', newCurve2);
    this.blob.nativeElement.style.width = `${this.curveX + 60}px`;
    this.hamburger.nativeElement.style.transform = `translate(${this.curveX}px, ${this.curveY}px)`;
    this.h2.nativeElement.style.transform = `translateY(${this.curveY}px)`;

    window.requestAnimationFrame(() => this.svgCurve());
  }
}
