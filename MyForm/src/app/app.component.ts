import { Component } from '@angular/core';
// Http
import { HttpClient } from '@angular/common/http';

import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyForm';
  username:string='';
  password:number=0;
  // url = 'https://ugobetori.it/_notes/api-test/angular/angular2/login.php';
  url = 'http://localhost:8080/api/login';
  url2="http://localhost:8080/api/test/allusers";
  logged: any;
  users:any;
  constructor(private myService:MyService){}
  
  inviaTemplateForm() {
    // Confeziona i dati del form in formato JSON
    const datiJSON = {
        username: this.username,
        password: this.password
    };
    // Stringhifica l'oggetto JSON (in questo caso per soddisfare le richieste del mio endpoint)    
    const datiStringa = datiJSON;

    // Http fornisce metodi per effettuare richieste HTTP restituisce un'Observable che apre un canale continuo di comunicazione
    this.myService.myPostHTTP(this.url,datiJSON)
    .subscribe({
          next: response => {
            this.logged=response;
            console.log('next: ' + JSON.stringify(response))},
          error: error => console.log('error: ' + JSON.stringify(error)),
          complete: () => console.log('complete')
      });
  }
  inviaTemplateUserForm() {
    this.myService.myGetHTTP(this.url2)
    .subscribe({
          next: response => {
            this.users=response;
            console.log('next: ' + JSON.stringify(response))},
          error: error => console.log('error: ' + JSON.stringify(error)),
          complete: () => console.log('complete')
      });
  }
  
  // constructor(
  //   private httpClient: HttpClient){}
  //   inviaTemplateForm() {
  //     // Confeziona i dati del form in formato JSON
  //     const datiJSON = {
  //         username: this.username,
  //         password: this.password
  //     };
  //     // Stringhifica l'oggetto JSON (in questo caso per soddisfare le richieste del mio endpoint)    
  //     // const datiStringa = JSON.stringify(datiJSON);

  //     // Http fornisce metodi per effettuare richieste HTTP restituisce un'Observable che apre un canale continuo di comunicazione
  //     this.httpClient.post(this.url, datiJSON)
   
  //     // .subscribe({
  //     //     next: response => console.log('next: ' + JSON.stringify(response)),
  //     //     error: error => console.log('error: ' + JSON.stringify(error)),
  //     //     complete: () => console.log('complete')
  //     // });
  //     .subscribe({
  //           next: response => {
  //             this.logged=response;
  //             console.log('next: ' + JSON.stringify(response))},
  //           error: error => console.log('error: ' + JSON.stringify(error)),
  //           complete: () => console.log('complete')
  //       });
  //   }
  //   inviaTemplateUserForm() {
  //     this.httpClient.get(this.url2)
   
  //     // .subscribe({
  //     //     next: response => console.log('next: ' + JSON.stringify(response)),
  //     //     error: error => console.log('error: ' + JSON.stringify(error)),
  //     //     complete: () => console.log('complete')
  //     // });
  //     .subscribe({
  //           next: response => {
  //             this.users=response;
  //             console.log('next: ' + JSON.stringify(response))},
  //           error: error => console.log('error: ' + JSON.stringify(error)),
  //           complete: () => console.log('complete')
  //       });
  //   }
  

  
}
