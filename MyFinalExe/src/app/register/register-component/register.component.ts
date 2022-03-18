import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title="Registrati";
  username:string='';
  email:string="";
  role:any;
  roleArray:any=[]
  nome="";
  cognome="";
  urlRegister="http://localhost:8080/api/signup";
  password:any;
  constructor(private myGlobalService:GlobalService, private myRegisterService:RegisterService) { }

  inviaTemplateForm() {
    // Confeziona i dati del form in formato JSON
    this.roleArray.push(this.role);
    const datiJSON = {
        username: this.username,
        email:this.email,
        password: this.password,
        role:this.roleArray,
        nome:this.nome,
        cognome:this.cognome
    };

    console.log(datiJSON);
    // Http fornisce metodi per effettuare richieste HTTP restituisce un'Observable che apre un canale continuo di comunicazione
    this.myRegisterService.myPostHTTP(this.urlRegister,datiJSON)
    .subscribe({
          next: response => {
            console.log('next: ' + JSON.stringify(response));
          },
          error: error => console.log('error: ' + JSON.stringify(error)),
          complete: () => console.log('complete')
      });
  }
  ngOnInit(): void {
  }

}
