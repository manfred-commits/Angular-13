import { Component } from '@angular/core';

@Component({
  /*nome selettore con il quale possiamo inserire il nostro
   codice all'interno del nostro html*/
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  /*metodo*/
  apriAlert(){
    alert("Angular Click");
  }
}
