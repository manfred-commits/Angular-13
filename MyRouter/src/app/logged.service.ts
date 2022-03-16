import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {
  /*Mock loggin*/
  isLogged=false;
  isLoggedChild=true;
  constructor() { }
}
