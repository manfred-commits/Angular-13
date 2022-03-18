import { Injectable } from '@angular/core';
import { Router,Route,CanLoad } from '@angular/router';

import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class LazyGuard implements CanLoad {

  constructor(private myGlobalService:GlobalService, private router:Router){}

  canLoad(){
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