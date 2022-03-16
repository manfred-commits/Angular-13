import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Modulo per Template forms
import { FormsModule } from '@angular/forms';
// Modulo HttpClient
import { HttpClientModule } from '@angular/common/http';

// import { MyService } from './my.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // MyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
