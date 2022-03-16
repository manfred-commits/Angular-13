import { Component, Input, OnInit } from '@angular/core';
import { MyService } from 'src/app/my.service';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
  @Input() item_child_A = ''; 
  parent_a='My Child A';

  constructor(private myService:MyService) { }

  nextSubjectValue='Subject Child A';
  myChildSubjectNext(){
    this.myService.mySubject.next(this.nextSubjectValue);
  }
  ngOnInit(): void {
  }

}
