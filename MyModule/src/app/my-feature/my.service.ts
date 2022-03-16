import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { 
    console.log('My Service Constructor');
  }

  // Metodo
  myServiceMethod(): string {
    return '1234567890';
  }

}
