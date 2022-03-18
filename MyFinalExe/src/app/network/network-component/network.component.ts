import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  title='Network';
  urlUtenti="http://localhost:8080/api/user/all";
  users:any;
  imageUrl:string='http://localhost:8080/images/';

  constructor(private myNetworkService:NetworkService,private myGlobalService:GlobalService) {
    this.getNetworkUsers();
    this.users=myGlobalService.allUsers;
  }
  getNetworkUsers() {
    this.myNetworkService.getData(this.urlUtenti)
    .subscribe({
          next: response => {
            this.users=response;
            this.myGlobalService.allUsers=response;
            console.log('next: ' + JSON.stringify(response))},
          error: error => console.log('error: ' + JSON.stringify(error)),
          complete: () => console.log('complete')
    });
  }
  getIdentifier(myUsername:any,myIndex:number){
    this.myGlobalService.selectedUsername=myUsername;
    this.myGlobalService.selectedUserImg=myIndex;
    // console.log(myUsername);
  }

  ngOnInit(): void {
  }

}
