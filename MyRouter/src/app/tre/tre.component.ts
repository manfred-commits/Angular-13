import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tre',
  templateUrl: './tre.component.html',
  styleUrls: ['./tre.component.css']
})
export class TreComponent implements OnInit {
  title = 'Component tre';
  constructor() {
    console.log('Costruttore tre Component');
   }

  ngOnInit(): void {
  }

}
