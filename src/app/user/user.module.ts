import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './gallery/about.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    UserComponent,
    TeamComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbCarousel,
    MdbCollapseModule

  ]
})
export class UserModule { }
