import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';
import { PageNotFoundComponent } from './shared-module/page-not-found/page-not-found.component';
import { BookFlightComponent } from './user/book-flight/book-flight.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { TeamComponent } from './user/team/team.component';

const routes: Routes = [{
  path:'',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path:'book-flight',
  component: BookFlightComponent
},

{
  path: 'contact',
  component: ContactUsComponent
},{
  path:'team',
  component: TeamComponent
},
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
