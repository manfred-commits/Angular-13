import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { LazyGuard } from './lazy.guard';

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:'full'},
  {path:"home", component:LoginComponentComponent},

  {path:"network",loadChildren:()=>import("./network/network.module").then(m=>m.NetworkModule),canLoad:[LazyGuard]},
  {path:"profile",loadChildren:()=>import("./profile/profile.module").then(m=>m.ProfileModule),canLoad:[LazyGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
