import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuardGuard implements CanActivate {
  constructor(private myGlobalService:GlobalService,private router:Router){}
  canActivate(){
    if(this.myGlobalService.isLogged.username!=""){
      return true;
    }else{
      alert("Non sei loggato!");
      this.navigateTo();
      return false;
    }
  }
  
  navigateTo(){
    this.router.navigate(['login']);
  }
}
