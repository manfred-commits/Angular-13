import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { LazyGuard } from './lazy.guard';
import { ActiveGuardGuard } from './active-guard.guard';

const routes: Routes = [
  {path: "", redirectTo:"login", pathMatch:'full'},
  {path:"login", component:LoginComponentComponent},

  {path:"network",loadChildren:()=>import("./network/network.module").then(m=>m.NetworkModule),canLoad:[LazyGuard],canActivate:[ActiveGuardGuard]},
  {path:"profile",loadChildren:()=>import("./profile/profile.module").then(m=>m.ProfileModule),canLoad:[LazyGuard],canActivate:[ActiveGuardGuard]},
  
  /*catch di TUTTI gli url sbagliati*/
  // {path:'**',component:LoginComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
