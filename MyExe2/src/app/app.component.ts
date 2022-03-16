import { Component } from '@angular/core';
import { MyService } from './my.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyExe2';
  
  constructor(private myService:MyService){}
  
}
