import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title = 'My Parent Component';

  stringaParent = 'valore di stringaParent';
  // Proprietà modificabile dal Componente Child via @Output
  numeroParent = 10;

  // Listener che gestisce l'output del componente figlio recuperandone il payload $event
  onOutputParent($event:any): void {
    // Valore iniziale della proprietà parent
    console.log('Il valore iniziale di numeroParent è: ' + this.numeroParent);
    // Contenuto del payload inviato dall'emitter
    console.log('Il contenuto del payload è: ' + $event[0] + ' - '  + $event[1]);
    // Assegna il valore della proprietà del child alla proprietà del parent
    this.numeroParent = $event[1];
  }

  /* VIEWCHILD */
  //  Inietta il componente child nel parent come ViewChild.
  @ViewChild(ChildComponent, {}) myChild!: ChildComponent;
  cambiaViewChild() {
    this.myChild.title = 'Nuovo titolo Child dal Parent';
    this.myChild.apriAlert(' via Parent ViewChild');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
