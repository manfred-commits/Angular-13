import { Component,Input } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private myService:MyService){};

  title = 'My Exe Comunication';
  app_value='My Global Root';
  onOutputParent($event:any): void {
    this.app_value=$event;
  }
  onOutputParentB($event:any): void {
    this.app_value=$event;
  }
  change(): void {
    this.app_value='New Global Root';
  }
  
  ngOnInit(){
    this.myService.mySubject
    .subscribe({
      next:(value:any)=>this.app_value=value,
    });
      
  }

}
