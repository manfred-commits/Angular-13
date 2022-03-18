import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  title="MySingleUser";
  users:any;
  singleUsername:any;
  myEstrapolatedUser:any;
  myUserImageIdentifier:number=0;
  imageUrl:string='http://localhost:8080/images/';
  constructor(private myGlobalService:GlobalService) {
    this.users=myGlobalService.allUsers;
    this.singleUsername=myGlobalService.selectedUsername;
    this.myUserImageIdentifier=myGlobalService.selectedUserImg+1;
    this.estrapolateUser(this.users,this.singleUsername);
    console.log(this.myEstrapolatedUser);
  }

  estrapolateUser(allUsers:any,username:string){
    for(let i=0;i<allUsers.length;i++){
      if(allUsers[i].username==username){
        this.myEstrapolatedUser=allUsers[i];
        break;
      }
    }
  }
  ngOnInit(): void {
  }

}
