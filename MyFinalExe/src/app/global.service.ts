import { Injectable } from '@angular/core';

@Injectable(
  // {providedIn: 'root'}
)
export class GlobalService {
  isLogged= {
    token:"",
    id:"",
    username:"",
    email:"",
    nome:"",
  };
  allUsers:any;
  selectedUsername:any;
  selectedUserImg:any;
  
  constructor() { }
  
}
