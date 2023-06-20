import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit, AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  @ViewChild('lineCanvas') lineCanvas!: ElementRef;

  private chart: any;
  private lineChart: any;

  createChart() {
    const chartContext = (this.chartCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
    const lineContext = (this.lineCanvas.nativeElement as HTMLCanvasElement).getContext('2d');

    this.chart = new Chart(chartContext, {
      type: 'bar',
      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13', '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17'],
        datasets: [
          {
            label: "Flights",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Passengers",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });

    this.lineChart = new Chart(lineContext, {
      type: 'line',
      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13', '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17'],
        datasets: [
          {
            label: "Flights",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Passengers",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createChart();
  }
}
