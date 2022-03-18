import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuardGuard } from './active-guard.guard';
import { LazyGuard } from './lazy.guard';
import { LoginComponent } from './login/login-component/login.component';
import { RegisterComponent } from './register/register-component/register.component';

const routes: Routes = [
  {path: "", redirectTo:"login", pathMatch:'full'},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"network",loadChildren:()=>import("./network/network.module").then(m=>m.NetworkModule),canLoad:[LazyGuard],canActivate:[ActiveGuardGuard]},
  {path:"profile",loadChildren:()=>import("./profile/profile.module").then(m=>m.ProfileModule),canLoad:[LazyGuard],canActivate:[ActiveGuardGuard]},
  
  /*catch di TUTTI gli url sbagliati*/
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
