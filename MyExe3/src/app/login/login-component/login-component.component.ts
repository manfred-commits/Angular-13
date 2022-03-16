import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/my.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  title='My Login';
  nome:string='';
  pw:number=0;
  urlLogin = 'https://ugobetori.it/_notes/api-test/angular/angular2/login.php';
  urlUtenti="https://ugobetori.it/_notes/api-test/angular/angular2/users.php";
  logged:any;
  users:any;
  constructor(private myService:MyService){}
  
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
            this.myService.isLogged=this.logged;
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
            this.myService.allUsers=response;
            console.log('next: ' + JSON.stringify(response))},
          error: error => console.log('error: ' + JSON.stringify(error)),
          complete: () => console.log('complete')
    });
  }

  ngOnInit(): void {
  }

}
