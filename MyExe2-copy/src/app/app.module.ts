import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyService } from './my.service';
// Modulo per Template forms
import { FormsModule } from '@angular/forms';
// Modulo HttpClient
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NetworkComponent } from './network/network.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NetworkComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSliderModule,
    MatButtonModule,
    MatSortModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    MyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
