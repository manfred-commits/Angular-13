import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Bootstrap';
  images = [944, 1011, 984].map((numberOfImage) => `https://picsum.photos/id/${numberOfImage}/1200/650`);

  constructor(private myNgbModal:NgbModal){}
}
