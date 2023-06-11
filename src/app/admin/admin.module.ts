import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
import { MatIcon } from '@angular/material/icon';
import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
