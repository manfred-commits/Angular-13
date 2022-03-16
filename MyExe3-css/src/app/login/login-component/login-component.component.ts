import { Component, OnInit } from '@angular/core';
import { MyGlobalService } from 'src/app/my-global.service';
import { LoginService } from '../login.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {

  title='My Login';
  nome:string='';
  pw:number=0;
  urlLogin = 'https://ugobetori.it/_notes/api-test/angular/angular2/login.php';
  logged:any;
  users:any;
  constructor(config: NgbModalConfig,
     private modalService: NgbModal,
     private myGlobalService:MyGlobalService,
     private myLogginService:LoginService){
      config.backdrop = 'static';
      config.keyboard = false;
  }
  open(content:any) {
    this.modalService.open(content);
  }
  inviaTemplateForm() {
    // Confeziona i dati del form in formato JSON
    const datiJSON = {
        nome: this.nome,
        pw: this.pw
    };
    // Stringhifica l'oggetto JSON (in questo caso per soddisfare le richieste del mio endpoint)    
    const datiStringa = JSON.stringify(datiJSON);

    // Http fornisce metodi per effettuare richieste HTTP restituisce un'Observable che apre un canale continuo di comunicazione
    this.myLogginService.myPostHTTP(this.urlLogin,datiStringa)
    .subscribe({
        next: response => {
          this.logged=response;
          console.log('next: ' + JSON.stringify(response));
          if(this.logged.log=="No"){
            alert("Data inserted doesn't refer to a register user");
          }
          this.myGlobalService.isLogged=this.logged;
        },
        error: error => console.log('error: ' + JSON.stringify(error)),
        complete: () => console.log('complete')
    });
  }
  logoutUtente(){
    if(this.myGlobalService.isLogged.log=="Si"){
      this.myGlobalService.isLogged.log="No";
      alert("Logout Effettuato!");
    }else{
      alert("Non hai ancora effettuato il Login!");
    }
  }

  ngOnInit(): void {
  }

}
