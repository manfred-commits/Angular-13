import { Injectable } from '@angular/core';
import { Router,Route,CanLoad } from '@angular/router';

import { MyService } from './my.service';

@Injectable({
  providedIn: 'root'
})
export class LazyGuard implements CanLoad {

  constructor(private myService:MyService,private router:Router){}

  canLoad(){
    if(this.myService.isLogged.log=="Si"){
      return true;
    }else{
      alert("Non sei loggato!");
      this.navigateTo();
      return false;
    }
 
  }
  navigateTo(){
    this.router.navigate(['home']);
  }
}