import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title='My Profile';
  logged:any;
  allUsers:any;
  
  imageUrl:string='https://ugobetori.it/_notes/api-test/angular/angular2/img/';
  constructor(private myService:MyService) {
    this.logged=myService.isLogged;
    this.allUsers=myService.allUsers;
    this.estrapolateUser;
  }
  estrapolateUser(){
    this.allUsers.forEach((element:any) => {
      if(element.nome.equals(this.logged.nome)){
        this.imageUrl=this.imageUrl+element.immagine;
        console.log(this.imageUrl);
      }
    });
  }
  ngOnInit(): void {
  }

}
