import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { TeamComponent } from './team/team.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    TeamComponent,
    GalleryComponent,
    CompanyComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbCarousel,
    MdbCollapseModule
  ]
})
export class UserModule { }
