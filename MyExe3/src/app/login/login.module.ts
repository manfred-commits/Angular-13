import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
// Modulo per Template forms
import { FormsModule } from '@angular/forms';
// Modulo HttpClient
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class LoginModule { }
