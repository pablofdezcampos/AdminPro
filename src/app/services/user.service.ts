import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterForm } from '../interfaces/register-form.interface';

const base_url = environment.base_url;
declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
              private http: HttpClient,
              private router: Router,
              private ngZone: NgZone
              ) {
  }

  logout(){

    localStorage.removeItem('token');

    google.accounts.id.revoke('pablobaloncestocvc@gmail.com', () => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      })
    })
  }

  validateToken(): Observable<boolean>{
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }) //Refresh the token
    .pipe(
      tap(
        (resp: any) => {
          localStorage.setItem('token', resp.token);
        }),
        //Return true for the guard, if there is new token (the user is logged) and you can access to the dashboard
        map(resp => true),
        //Catch the error and return false to protect the guard if the is not token
        catchError(err => of(false))
    )
  }

  createUsers(formData: RegisterForm){
    return this.http.post(`${base_url}/users`, formData)
                .pipe(
                  tap(
                    (resp: any) =>
                    {
                      //Save the token in the local storage
                      localStorage.setItem('token', resp.token)
                    }
                 )
              );
  }

  login(formData: LoginForm){
    return this.http.post(`${base_url}/login`, formData)
                .pipe(
                  tap(
                    (resp: any) =>
                    {
                      //Save the token in the local storage
                      localStorage.setItem('token', resp.token);
                    }
                  )
                );
  }

  loginGoogle(token: string){
    return this.http.post(`${base_url}/login/google`, {token})
            .pipe(
              tap( (resp: any) => {
                  localStorage.setItem('token', resp.token);
                }
              )
            )
  }
}
