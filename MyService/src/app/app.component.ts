import { Component } from '@angular/core';
import { MyService } from './my.service';
import { MyComponentService } from './my-component.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyService';
  constructor(
    public myService: MyService,
    private myComponentService: MyComponentService
  ){
    console.log(myService.proprietaMyService + ' in AppComponent');
    myService.metodoMyService(' in AppComponent');

    console.log(myComponentService.proprietaMyComponentService+ ' in AppComponent');
    myComponentService.metodoMyComponentService(" says hello");
  }
}
