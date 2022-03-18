import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title:string="MyProfile";
  urlNote:string="http://localhost:8080/api/note/allmynotes/";
  urlAddNote:string="http://localhost:8080/api/note/post";
  urlDeleteNote:string="http://localhost:8080/api/note/deletenote";
  notes:any;
  username:string="";
  testoNota:string="";

  constructor(private myGlobalService:GlobalService,private myProfileService:ProfileService) { 
    this.getNotes();
    this.username=myGlobalService.isLogged.username;
  }
  getNotes() {
    // Confeziona i dati del form in formato JSON
    const datiJSON = {
        id:this.myGlobalService.isLogged.id
    };

    // Http fornisce metodi per effettuare richieste HTTP restituisce un'Observable che apre un canale continuo di comunicazione
    this.myProfileService.postData(this.urlNote,datiJSON)
    .subscribe({
        next: response => {
          this.notes=response;
          console.log('next: ' + JSON.stringify(response));
        },
        error: error => console.log('error: ' + JSON.stringify(error)),
        complete: () => console.log('complete')
    });
  }
  addNote(){
    // Confeziona i dati del form in formato JSON
    const datiJSON = {
      testoNota:this.testoNota,
      user:{
        id:this.myGlobalService.isLogged.id
      }
    };

    // Http fornisce metodi per effettuare richieste HTTP restituisce un'Observable che apre un canale continuo di comunicazione
    this.myProfileService.postData(this.urlAddNote,datiJSON)
    .subscribe({
        next: response => {
          console.log('next: ' + JSON.stringify(response));
          this.getNotes();
        },
        error: error => console.log('error: ' + JSON.stringify(error)),
        complete: () => console.log('complete: nota aggiunta')
    });
  }
  removeNote(noteId:any){
    // Confeziona i dati del form in formato JSON
    const datiJSON = {
      id:noteId,
      user:{
        id:this.myGlobalService.isLogged.id
      }
    };

    // Http fornisce metodi per effettuare richieste HTTP restituisce un'Observable che apre un canale continuo di comunicazione
    this.myProfileService.postData(this.urlDeleteNote,datiJSON)
    .subscribe({
        next: response => {
          console.log('next: ' + JSON.stringify(response));
          this.getNotes();
        },
        error: error => console.log('error: ' + JSON.stringify(error)),
        complete: () => console.log('complete: nota cancellata')
    });
  }

  ngOnInit(): void {
  }

}
