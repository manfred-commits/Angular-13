import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NetworkComponent } from './network/network.component';
import { LoginComponent } from './login/login.component';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
  {
    path:'login',
    redirectTo:'login',
    pathMatch:'full'
    /*prefix o full
    prefix:prende la prima parte dell'url fino al /
    full:prende tutto l'url
    */
  },
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[CanActivateGuard]},
  {path:'network',component:NetworkComponent,canActivate:[CanActivateGuard]},
  
  /*catch di TUTTI gli url sbagliati*/
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
