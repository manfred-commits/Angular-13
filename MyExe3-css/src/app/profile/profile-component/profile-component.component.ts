import { Component, OnInit } from '@angular/core';
import { MyGlobalService } from 'src/app/my-global.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {
  title='My Profile';
  logged:any;
  allUsers:any;
  urlUtenti="https://ugobetori.it/_notes/api-test/angular/angular2/users.php";
  imageUrl:string='https://ugobetori.it/_notes/api-test/angular/angular2/img/';

  constructor(private myProfileService:ProfileService,private myGlobalService:MyGlobalService) {
    this.getNetworkUsers();
    this.logged=myGlobalService.isLogged;
    this.allUsers=myGlobalService.allUsers;
  }
  getNetworkUsers() {
    this.myProfileService.myGetHTTP(this.urlUtenti)
    .subscribe({
          next: response => {
            this.allUsers=response;
            this.myGlobalService.allUsers=response;
            console.log('next: ' + JSON.stringify(response))},
          error: error => console.log('error: ' + JSON.stringify(error)),
          complete: () => console.log('complete')
    });
  }
  ngOnInit(): void {
  }

}
