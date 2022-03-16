import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPipe';
  testo='prova';
  miadata: Date = new Date(1977, 11, 12);
  prezzo = 65.43216;
  guadagno = 0.37;
  nome = 'Giacomo';
  stringa = 'Mia stringa';

  jsonobject = {
    nome: 'Mario',
    cognome: 'Viola',
    dettagli: {
      eta: 33,
      pregi: ['Bello', 'Alto', 'Onesto']
    }
  };

  object = {nome: 'Fragole', prezzo: 7};
  map = new Map([[1, 'Arance'], [2, 'Broccoli']]);


  lista = ['Aldo', 'Giovanni', 'Giacomo'];

}
