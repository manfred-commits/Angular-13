import { Injectable } from '@angular/core';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class MyComponentService {

  // Proprietà
  public proprietaMyComponentService = 'Proprietà MyComponentService';
  // Costruttore
  constructor() {
    console.log('Costruttore MyComponentService');
  }
  // Metodi
  /* ? indica una variabile opzionale passata opzionalmente*/
  public metodoMyComponentService(stringa?: string) {
    console.log('Metodo MyComponentService' + stringa);
  }
}
