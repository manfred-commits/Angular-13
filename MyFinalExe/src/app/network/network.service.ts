import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../global.service';

@Injectable(
  // {  providedIn: 'root'}
  )
export class NetworkService {

  constructor(private httpClient:HttpClient,private myGlobalService:GlobalService) { }

  // myGetHTTP(url:string){
  //   return this.httpClient.get(url);
  // }
  authorizationHeaders = new HttpHeaders()
  .set('Content-Type', 'application/x-www-form-urlencoded')
  // .set('Authorization', 'Bearer ' + this.globalService.getLogged().accessToken)
  .set('Authorization', 'Bearer ' + this.myGlobalService.isLogged.token)
  
  getData(url: string) {
    return this.httpClient.get<any>(url, { 'headers': this.authorizationHeaders });
  }
}
