import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { UsertableComponent } from './usertable/usertable.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TicketComponent } from './ticket_table/ticket.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    AdminComponent,
    UsertableComponent,
    TicketComponent,
    AnalyticsComponent,
    ViewcontactComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    FullCalendarModule
  ]
})
export class AdminModule { }
