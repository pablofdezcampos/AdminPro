import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterForm } from '../interfaces/register-form.interface';

import { User } from '../models/user.model';

const base_url = environment.base_url;
declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user?: User;

  constructor(
              private http: HttpClient,
              private router: Router,
              private ngZone: NgZone
              ) {
  }


  get token(): string{
    return localStorage.getItem('token') || '';
  }

   get uid(): string{
     return this.user!.uid || '';
   }

  validateToken(): Observable<boolean>{

    return this.http.get(`${base_url}/login/renew`, {
      headers: {
        'x-token': this.token
      }
    }) //Refresh the token
    .pipe(
      map(
        (resp: any) => {
          const {name, email, img = '', google, role, uid} = resp.user;
          this.user = new User(name, email, '', img, google, role, uid);

          localStorage.setItem('token', resp.token);
          //Return true for the guard, if there is new token (the user is logged) and you can access to the dashboard
          return true;
        }),
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

  //The arguments are the fields that are in the my profile section
  updateUser(data: {name: string, email: string, role: string}){
    //data = {
    //  ...data,
    //}

    console.log(this.user);

    return this.http.put(`${base_url}/users/${this.uid}`, data, {
      headers: {
        'x-token': this.token
      }
    })
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
            );
  }

  logout(){

    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');

    google.accounts.id.revoke('pablobaloncestocvc@gmail.com', () => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      })
    });
  }

}
