import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// modulo Forms
import { FormsModule } from '@angular/forms';

// componente
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// public
export class AppModule { }
