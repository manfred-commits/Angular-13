import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {
  title = 'Component uno';
  constructor(private router:Router) { 
     console.log('Costruttore uno Component');
  }

  // Routing con parametro
  myNavigateToParam() {
    this.router.navigate(['due', {id: 2, nome:'Ciro'}]);
  }
  // myNavigateQueryString() {
  //   this.router.navigate(['due'], {id: 2, nome:'Ciro'});
  // }

  ngOnInit(): void {
  }

}
