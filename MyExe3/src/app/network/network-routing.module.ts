import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkComponentComponent } from './network-component/network-component.component';

const routes: Routes = [
  {path:'', component:NetworkComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkRoutingModule { }
