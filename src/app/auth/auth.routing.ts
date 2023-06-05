import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../service/authguard.guard";

const routes: Routes =[{
  path:'',
  pathMatch: 'full',
  redirectTo: 'login'
},
{
  path:'login',
  component: LoginComponent
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
