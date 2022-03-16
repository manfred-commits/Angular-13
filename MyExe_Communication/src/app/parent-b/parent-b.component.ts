import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-b',
  templateUrl: './parent-b.component.html',
  styleUrls: ['./parent-b.component.css']
})
export class ParentBComponent implements OnInit {
  parent_b='My Parent B';
  constructor() { }
  @Input() item_B = ''; 
  @Output() eventOtput:EventEmitter<any>= new EventEmitter<any>();
  eventEmit(){
    this.eventOtput.emit(this.parent_b);
  }
  ngOnInit(): void {
  }

}
