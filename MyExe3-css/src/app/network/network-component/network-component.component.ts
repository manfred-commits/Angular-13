import { Component, OnInit } from '@angular/core';
import { MyGlobalService } from 'src/app/my-global.service';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-network-component',
  templateUrl: './network-component.component.html',
  styleUrls: ['./network-component.component.css']
})
export class NetworkComponentComponent implements OnInit {
  title='My Network';
  contenutoFrase="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut sint harum praesentium quisquam dignissimos eos omnis corrupti ratione iusto cupiditate quae animi molestiae cum, iure maiores expedita non quasi?"; 
  urlUtenti="https://ugobetori.it/_notes/api-test/angular/angular2/users.php";
  users:any;
  imageUrl:string='https://ugobetori.it/_notes/api-test/angular/angular2/img/';

  constructor(private myNetworkService:NetworkService,private myGlobalService:MyGlobalService) {
    this.getNetworkUsers();
    this.users=myGlobalService.allUsers;
  }
  getNetworkUsers() {
    this.myNetworkService.myGetHTTP(this.urlUtenti)
    .subscribe({
          next: response => {
            this.users=response;
            this.myGlobalService.allUsers=response;
            console.log('next: ' + JSON.stringify(response))},
          error: error => console.log('error: ' + JSON.stringify(error)),
          complete: () => console.log('complete')
    });
  }
  inputFraseUtente(frase:string){
    this.contenutoFrase=frase;
  }
  ngOnInit(): void {
  }

}
