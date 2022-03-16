import { Injectable } from '@angular/core';
import { Router,Route,CanLoad } from '@angular/router';

import { MyGlobalService } from './my-global.service';

@Injectable({
  providedIn: 'root'
})
export class LazyGuard implements CanLoad {

  constructor(private myGlobalService:MyGlobalService, private router:Router){}

  canLoad(){
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