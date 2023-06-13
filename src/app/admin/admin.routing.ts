import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "../service/authguard.guard";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { RouteGuard } from "../service/routeguard.guard";

const routes: Routes =[

  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, RouteGuard],
    children: [
      {
        path: 'admin_home',
        component: AdminHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
