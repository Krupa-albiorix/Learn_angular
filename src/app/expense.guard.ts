import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

  constructor(
    private authService : AuthService,
    private router : Router
  ) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     let url : string = state.url;
  //       return this.checkLogin(url);
  //   }
  //   checkLogin(url: string): true | UrlTree {
  //     console.log("Url: " + url)
  //     let val: any = localStorage.getItem('isUserLoggedIn');

  //     if(val != null && val == "true"){
  //        if(url == "/login")
  //           this.router.parseUrl('/expenses');
  //        else 
  //           return true;
  //     } else {
  //        return this.router.parseUrl('/login');
  //     }
  //  }

  canActivate() {
    console.log("hello",this.authService.isUserLoggedIn);
      if(this.authService.isUserLoggedIn) return true;

      this.router.navigate(['/login']);
      return false;
  }

}
