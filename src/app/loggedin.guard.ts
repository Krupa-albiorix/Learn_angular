import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {

  constructor(
    private authService : AuthService,
    private router : Router
  ) {}

  canActivate() {
    console.log("hello",this.authService.isUserLoggedIn);
    if(this.authService.isUserLoggedIn)
    {
      console.log("All ready login");
      this.router.navigate(['/posts']);
      return false;
    }
    else {
      console.log("All ready logout");
      return true;
    }
  }
  
}
