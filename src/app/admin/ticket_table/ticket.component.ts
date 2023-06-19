import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  displayedColumns: string[] = ['position', 'name', 'departureAirport', 'seatName', 'action'];
   dataSource = new MatTableDataSource<Ticket>();

  tickets = [];
  index= 1;
  errorMsg: string;
  userName: string;
  travelDate:string;
  departureAirport:string;
  arrivalAirport:string;
  departureTime:string;
  arrivalTime:string;
  seatName:string;

  constructor(private _ticketService:TicketService){}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this._ticketService.getTickets().subscribe({
      next: (data) => {
        this.tickets = data;
        // console.log(this.tickets)
        this.dataSource.data = this.tickets;
      },
      error: (error) => (this.errorMsg = error),
      complete: () => {}
    });
  }

}

export interface Ticket{
  userName: string;
  travelDate:string;
  departureAirport:string;
  arrivalAirport:string;
  departureTime:string;
  arrivalTime:string;
  seatName:string;
}

