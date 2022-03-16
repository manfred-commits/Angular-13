import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPipe } from './my.pipe';
import { MyTranslatorPipe } from './my-translator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyPipe,
    MyTranslatorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
