import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkComponent } from './network-component/network.component';
import { SingleUserComponent } from './network-component/single-user/single-user.component';

const routes: Routes = [
  {path:'',component:NetworkComponent},
  {path:'single-user',component:SingleUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkRoutingModule { }
