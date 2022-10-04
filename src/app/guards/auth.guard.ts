import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { tap } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

//To protect the routes, the user must be login to access /dashboard
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      return this.userService.validateToken()
                  .pipe(
                    tap(isLogged => {
                         if(!isLogged){
                          this.router.navigateByUrl('/login');
                         }
                    })
                  )
  }

}
