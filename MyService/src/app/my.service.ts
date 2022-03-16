import { Injectable } from '@angular/core';
// iniettati per mezzo di dependency injection nell'altri componenti

@Injectable(
  {
  /*valore predefinito che indica la visibilità del Service*/
  providedIn: 'root'
  }
)
export class MyService {
  // Proprietà
  public proprietaMyService = 'Proprietà MyService';
  // Costruttore
  constructor() {
    console.log('Costruttore MyService');
  }
  // Metodi
  /* ? indica una variabile opzionale passata opzionalmente*/
  public metodoMyService(stringa?: string) {
    console.log('Metodo MyService' + stringa);
  }

}
