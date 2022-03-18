import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { 
    
  }
  myPostHTTP(url:string,datiJSON:any){
   return this.httpClient.post(url, datiJSON);
  }
}
