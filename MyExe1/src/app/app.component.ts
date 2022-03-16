import { Component } from '@angular/core';
import { MyHttpService } from './my-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyExe1';
  nome:string='';
  pw:number=0;
  urlLogin = 'https://ugobetori.it/_notes/api-test/angular/angular2/login.php';
  urlUtenti="https://ugobetori.it/_notes/api-test/angular/angular2/users.php";
  logged: any;
  users:any;
  constructor(private myService:MyHttpService){}
  
  inviaTemplateForm() {
    // Confeziona i dati del form in formato JSON
    const datiJSON = {
        nome: this.nome,
        pw: this.pw
    };
    // Stringhifica l'oggetto JSON (in questo caso per soddisfare le richieste del mio endpoint)    
    const datiStringa = JSON.stringify(datiJSON);

    // Http fornisce metodi per effettuare richieste HTTP restituisce un'Observable che apre un canale continuo di comunicazione
    this.myService.myPostHTTP(this.urlLogin,datiStringa)
    .subscribe({
          next: response => {
            this.logged=response;
            console.log('next: ' + JSON.stringify(response));
            if(this.logged.log=="No"){
              alert("Data inserted doesn't refer to a register user");
            }else if(this.logged.log=="Si"){
              this.inviaTemplateUserForm();
            }

          },
          error: error => console.log('error: ' + JSON.stringify(error)),
          complete: () => console.log('complete')
      });
  }
  inviaTemplateUserForm() {
    this.myService.myGetHTTP(this.urlUtenti)
    .subscribe({
          next: response => {
            this.users=response;
            console.log('next: ' + JSON.stringify(response))},
          error: error => console.log('error: ' + JSON.stringify(error)),
          complete: () => console.log('complete')
    });
  }
}
