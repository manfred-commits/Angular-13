import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  // {  providedIn: 'root'}
)
export class MyGlobalService {
  isLogged= {
    log:"No",
    id:"",
    nome:""
  };
  allUsers:any;
}
