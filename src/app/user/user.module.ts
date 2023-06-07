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
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { NgHelmetModule } from 'ng-helmet';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    TeamComponent,
    GalleryComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbCarousel,
    MdbCollapseModule,
    HttpClientModule,
    SharedModuleModule,
    NgHelmetModule
  ],
  providers: [

  ],
  exports: [UserComponent, TeamComponent, GalleryComponent, CompanyComponent],
})
export class UserModule { }
