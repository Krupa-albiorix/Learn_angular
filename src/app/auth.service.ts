import { delay, Observable, of, tap } from 'rxjs';
import { Injectable, Pipe } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isUserLoggedIn: any = localStorage.getItem('isUserLoggedIn') ? localStorage.getItem('isUserLoggedIn') : false;
  isLoggedIn: any;
  

  login (userName : string, password : string): Observable<any> {
    console.log(userName);
    console.log(password);
    this.isUserLoggedIn = userName == 'admin' && password == 'admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

  return of(this.isUserLoggedIn).pipe(
    delay(1000),
    tap(val => {
      console.log('Is user Authentication is successful: ' + val);
    })
  );
  }

  logout(): void {
    this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn');
  }
  constructor() { }
}
