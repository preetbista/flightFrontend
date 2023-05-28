import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';
import { PageNotFoundComponent } from './user/page-not-found/page-not-found.component';

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
