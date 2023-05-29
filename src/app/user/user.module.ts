import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared-module/page-not-found/page-not-found.component';
import { UserComponent } from './user.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
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
