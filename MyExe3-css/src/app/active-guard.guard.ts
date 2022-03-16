import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyGlobalService } from './my-global.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuardGuard implements CanActivate {
  constructor(private myGlobalService:MyGlobalService,private router:Router){}
  canActivate(){
    if(this.myGlobalService.isLogged.log=="Si"){
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
