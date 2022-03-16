import { Injectable } from '@angular/core';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class MyModuleServiceService {
  // Proprietà
  public proprietaMyModuleService = 'Proprietà MyModuleService';
  // Costruttore
  constructor() {
    console.log('Costruttore MyModuleService');
  }
  // Metodi
  /* ? indica una variabile opzionale passata opzionalmente*/
  public metodoMyModuleService(stringa?: string) {
    console.log('Metodo MyModuleService' + stringa);
  }
}
