import { Injectable } from '@angular/core';
// Http
import { HttpClient } from '@angular/common/http';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class MyService {

  constructor(private httpClient: HttpClient) { 
    
  }
  myPostHTTP(url:string,datiString:any){
   return this.httpClient.post(url, datiString);
  }
  myGetHTTP(url:string){
    return this.httpClient.get(url);
  }
}
