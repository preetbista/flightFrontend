import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./gallery/about.component";

const routes: Routes =[{
  path:'',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path:'home',
  component: HomeComponent
},
{
  path:'gallery',
  component: AboutComponent
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
