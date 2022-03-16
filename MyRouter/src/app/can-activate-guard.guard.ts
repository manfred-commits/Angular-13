import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedService } from './logged.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardGuard implements CanActivate {

  constructor(private loggedService:LoggedService, 
    // private router:Router,
    ){}
  canActivate(){
    if(this.loggedService.isLogged){
      return true;
    }else{
      alert("Non hai il permesso di visitare questa pagina! Prova a loggarti");
      return false;
    }
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
  }
  
}
