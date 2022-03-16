import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyService } from './my.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private myService:MyService, 
    // private router:Router,
    ){}
  canActivate(){
    if(this.myService.isLogged.log=="Si"){
      return true;
    }else{
      alert("Non sei loggato!");
      return false;
    }

    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
  }
  
}
