import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { UsertableComponent } from './usertable/usertable.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { NepaliCalendarService } from './admin-home/nepali-calendar.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    AdminHomeComponent,
    UsertableComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    AdminHomeComponent
  ],
  providers: [NepaliCalendarService]
})
export class AdminModule { }
