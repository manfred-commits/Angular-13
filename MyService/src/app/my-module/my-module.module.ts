import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModuleComponentComponent } from './my-module-component/my-module-component.component';

import { MyModuleServiceService } from './my-module-service.service';

@NgModule({
  declarations: [
    MyModuleComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MyModuleComponentComponent
  ],
  providers:[
    MyModuleServiceService
  ],
})
export class MyModuleModule { }
