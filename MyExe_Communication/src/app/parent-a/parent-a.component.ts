import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-a',
  templateUrl: './parent-a.component.html',
  styleUrls: ['./parent-a.component.css']
})
export class ParentAComponent implements OnInit {
  @Input() item_A = ''; 
  parent_a='My Parent A';
  @Output() emittedItem: EventEmitter<any>= new EventEmitter<any>();
  addNewItem() {
    this.emittedItem.emit(this.parent_a);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
