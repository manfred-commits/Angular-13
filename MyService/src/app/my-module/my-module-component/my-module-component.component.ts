import { Component, OnInit } from '@angular/core';
import { MyModuleServiceService } from '../my-module-service.service';

@Component({
  selector: 'app-my-module-component',
  templateUrl: './my-module-component.component.html',
  styleUrls: ['./my-module-component.component.css']
})
export class MyModuleComponentComponent implements OnInit {

  constructor(private myService:MyModuleServiceService) {
    console.log(myService.proprietaMyModuleService);
    console.log(myService.metodoMyModuleService("ciao ciao module service"));
   }

  ngOnInit(): void {
  }

}
