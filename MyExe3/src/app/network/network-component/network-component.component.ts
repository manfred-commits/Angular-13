import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/my.service';

@Component({
  selector: 'app-network-component',
  templateUrl: './network-component.component.html',
  styleUrls: ['./network-component.component.css']
})
export class NetworkComponentComponent implements OnInit {
  title='My Network';
  contenutoFrase="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut sint harum praesentium quisquam dignissimos eos omnis corrupti ratione iusto cupiditate quae animi molestiae cum, iure maiores expedita non quasi?";
  logged:any;
  users:any;
  imageUrl:string='https://ugobetori.it/_notes/api-test/angular/angular2/img/';
  constructor(private myService:MyService) {
    this.logged=myService.isLogged;
    this.users=myService.allUsers;
  }

  inputFraseUtente(frase:string){
    this.contenutoFrase=frase;
  }
  ngOnInit(): void {
  }

}
