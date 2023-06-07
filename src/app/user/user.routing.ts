import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { BookFlightComponent } from "./book-flight/book-flight.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { TeamComponent } from "./team/team.component";
import { CompanyComponent } from "./company/company.component";
import { AuthGuard } from "../service/authguard.guard";

const routes: Routes =[
      {
        path:'home',
        component: HomeComponent
      },
      {
        path: 'gallery',
        title: 'Gallery',
        component: GalleryComponent
      },
      {
        path:'book-flight',
        title: 'Book Flight',
        component: BookFlightComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'contact',
        title: 'Contact Us',
        component: ContactUsComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'team',
        title: 'Team',
        component: TeamComponent
      },
      {
        path: 'company',
        title: 'Company',
        component: CompanyComponent
      }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
