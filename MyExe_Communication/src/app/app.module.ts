import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentAComponent } from './parent-a/parent-a.component';
import { ParentBComponent } from './parent-b/parent-b.component';
import { ChildAComponent } from './parent-a/child-a/child-a.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentAComponent,
    ParentBComponent,
    ChildAComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
