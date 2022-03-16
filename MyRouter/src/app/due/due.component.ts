import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-due',
  templateUrl: './due.component.html',
  styleUrls: ['./due.component.css']
})
export class DueComponent implements OnInit {
  title = 'Component due';
  myId!:string;
  constructor(private activatedRoute:ActivatedRoute) { 
    console.log('Costruttore due Component');
  }

  ngOnInit(): void {
    console.log("On init");
    this.activatedRoute.paramMap
    .subscribe({
      next:myParams=>{
        this.myId=myParams.get("id")!;
        console.log("id: "+ this.myId)!;
      }
    })
  }
  ngOnDestroy(){
    console.log("On destroy");
  }

}
