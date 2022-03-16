import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MySubject';
  mySubject = new Subject<String>();
  subjectEmit(){
    const value='Aldo';

    setInterval(()=>{
      this.mySubject.next(value);
    },1000);
    console.log('Subject Emil: '+ value);
  }

  myBehaviorSUbject = new BehaviorSubject<string>('Aldo');

  behaviourSubjectEmit(){

  }

  myReplaySubject = new ReplaySubject<string>(3);
  
  replaySubjectEmit(){

  }

  myAsyncSubject = new AsyncSubject<any>();

  asyncSubjectEmit(){
    
  }
}
