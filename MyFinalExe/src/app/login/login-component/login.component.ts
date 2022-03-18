import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title='My Login';
  username:string='';
  password:any;
  urlLogin = 'http://localhost:8080/api/login';
  logged:any;

  constructor(private myGlobalService:GlobalService, private myLoginService:LoginService) { }
  inviaTemplateForm() {
    // Confeziona i dati del form in formato JSON
    const datiJSON = {
        username: this.username,
        password: this.password
    };

    // Http fornisce metodi per effettuare richieste HTTP restituisce un'Observable che apre un canale continuo di comunicazione
    this.myLoginService.myPostHTTP(this.urlLogin,datiJSON)
    .subscribe({
          next: response => {
            this.logged=response;
            console.log('next: ' + JSON.stringify(response));
            
            this.myGlobalService.isLogged=this.logged;
          },
          error: error => {
            console.log('error: ' + JSON.stringify(error));
            alert("Data inserted doesn't refer to a register user, or is not valid!");
          }
          ,
          complete: () => console.log('complete')
      });
  }

  logoutUser(){
    if(this.myGlobalService.isLogged.username!=null){
      this.myGlobalService.isLogged= {
        token:"",
        id:"",
        username:"",
        email:"",
        nome:"",
      };
      alert("Logout Effettuato!");
    }else{
      alert("Non hai ancora effettuato il Login!");
    }
  }

  ngOnInit(): void {
  }

}
