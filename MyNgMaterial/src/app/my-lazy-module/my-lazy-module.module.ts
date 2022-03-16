import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLazyComponentComponent } from './my-lazy-component/my-lazy-component.component';



@NgModule({
  declarations: [
    MyLazyComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyLazyModuleModule { }
