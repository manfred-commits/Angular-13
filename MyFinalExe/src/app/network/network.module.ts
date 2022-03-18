import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkComponent } from './network-component/network.component';
import { NetworkRoutingModule } from './network-routing.module';
import { SingleUserComponent } from './network-component/single-user/single-user.component';
import { NetworkService } from './network.service';


@NgModule({
  declarations: [
    NetworkComponent,
    SingleUserComponent
  ],
  imports: [
    CommonModule,
    NetworkRoutingModule
  ],
  providers:[
    NetworkService
  ],
  exports:[
    NetworkComponent
  ]
})
export class NetworkModule { }
