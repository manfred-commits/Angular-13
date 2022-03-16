import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { MyService } from './my.service';
import { MyComponentService } from './my-component.service';
import { MyModuleModule } from './my-module/my-module.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyModuleModule,
    
  ],
  providers: [
    // MyService
    MyComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
