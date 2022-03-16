import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';
import { DueComponent } from './due/due.component';
import { TreComponent } from './tre/tre.component';
import { QuattroComponent } from './quattro/quattro.component';
import { TreDueComponent } from './tre/tre-due/tre-due.component';
import { TreUnoComponent } from './tre/tre-uno/tre-uno.component';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DueComponent,
    TreComponent,
    QuattroComponent,
    TreDueComponent,
    TreUnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
