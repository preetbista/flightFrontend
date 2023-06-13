import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private router: Router, private _loginService:LoginServiceService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the route contains '/admin'
    if (state.url.includes('/admin')) {

      const isAuthenticated = this._loginService.isLoggedIn();

      if (!isAuthenticated) {
        // Redirect to the login page
        this.router.navigate(['/login']);
        return false;
      }
    }

    return true;
  }
}
