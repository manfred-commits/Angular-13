import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // si potrebbe anche scrivere del html direttamente in template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myImgUrl = './assets/lime.png';
  myNum: number = 3.679;
  myNum2 = 0;
  myModel:string = 'MyModel input text';  
  myNames: string[] = ['Al', 'Joe', 'Jack'];
  myObjects: any[] = [
      { nome: 'Aldo', cognome: 'Rossi', eta: 33 },
      { nome: 'Giovanni', cognome: 'Verdi', eta: 44 },
      { nome: 'Giacomo', cognome: 'Bianchi', eta: 55 },
  ];

  myObject = { nome: 'Aldo', cognome: 'Rossi', eta: 33 };
  myBoolean = true;
  title: string = 'My Template';
  //myImgUrl: string = './assets/lime.png';
  myVal() {
    return this.myNum;
  }
  mostraRef(ref: any) {
    alert(ref);
  }
  mostraModel() {
    alert(this.myModel);
  }
}
