import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs'
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{

    constructor(
      private auth: AuthService,
      private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean>{
      if (this.auth.isAuthenticated()) {
        //this.router.navigate(['/main'])
          return of(true)
      }else {
          this.router.navigate(['/login'], {
              queryParams: {
                  accessDenied: true
              }
          })
          return of(false)
      }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
      return this.canActivate(route, state)
  }
}
