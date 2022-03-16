import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyPipe } from './my.pipe';

@NgModule({
  declarations: [
    MyComponentComponent,
    MyPipe
  ],
  imports: [
    CommonModule
  ],
  // poichè il componente deve essere visualizzato da AppComponente, va esportato
  exports:[
    MyComponentComponent
  ]
})
export class MyFeatureModule { }
