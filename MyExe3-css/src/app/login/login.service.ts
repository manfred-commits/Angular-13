import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {  providedIn: 'root'}
)
export class LoginService {

  constructor(private httpClient: HttpClient) { 
    
  }
  myPostHTTP(url:string,datiString:any){
   return this.httpClient.post(url, datiString);
  }
}
