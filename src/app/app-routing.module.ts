import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared-module/page-not-found/page-not-found.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path:'',
  pathMatch: 'full',
  redirectTo: 'user/home'
  },
  {
    path:'user',
    loadChildren: () => import('./user/user.module').then(u => UserModule)
  },

{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},

{
  path:'admin',
  loadChildren: () => import('./admin/admin.module').then(t  => t.AdminModule)
},
{
  path: '**',
  component: PageNotFoundComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
