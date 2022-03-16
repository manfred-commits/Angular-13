import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  title = 'My Child Component';
  
  numeroChild = 222;
  arrayChild: number[] = [12, this.numeroChild];

  @Input() inputChild = 'Valore di inputChild';

  @Output() outputChild: EventEmitter<any> = new EventEmitter<any>();

    // Lancia alert con eventuali argomenti
    apriAlert(arg?: string) {
      let messaggio;
      if (arg != null) {
        messaggio = arg;
      }
      alert('Click Child: ' + messaggio);
    }
  

  // Metodo per la generazione dell'evento
  childEventEmitter() {
    // La generazione dell’evento si effettua invocando il metodo emit()
    // che accetta un unico argomento
    this.outputChild.emit(this.arrayChild);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
