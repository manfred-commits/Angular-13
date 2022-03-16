import { Component, OnInit } from '@angular/core';
// Service
import { MyService } from '../my.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  title = 'My Feature Module';
  text = 'Testo da pipare';
  secretValue!: string;

  // Injection del Service
  constructor(private myService: MyService) { }

  ngOnInit() {
    // Chiama il metodo del service
    this.secretValue = this.myService.myServiceMethod();
  }


}
