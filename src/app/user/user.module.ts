import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    UserComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
