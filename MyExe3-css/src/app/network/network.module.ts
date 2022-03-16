import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkComponentComponent } from './network-component/network-component.component';
import { NetworkRoutingModule } from './network-routing.module';
import { NetworkService } from './network.service';

@NgModule({
  declarations: [
    NetworkComponentComponent
  ],
  imports: [
    CommonModule,
    NetworkRoutingModule
  ],
  providers:[
    NetworkService
  ],
  exports:[
    NetworkComponentComponent
  ]
})
export class NetworkModule { }
