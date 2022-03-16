import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {
  title = 'My GrandChild Component';
  constructor() { }

  ngOnInit(): void {
  }

}
