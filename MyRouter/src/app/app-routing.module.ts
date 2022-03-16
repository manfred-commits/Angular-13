import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import componenti
import { UnoComponent } from './uno/uno.component';
import { DueComponent } from './due/due.component';
import { TreComponent } from './tre/tre.component';
import { QuattroComponent } from './quattro/quattro.component';

/*figli*/
import { TreUnoComponent } from './tre/tre-uno/tre-uno.component';
import { TreDueComponent } from './tre/tre-due/tre-due.component';

import { CanActivateGuardGuard } from './can-activate-guard.guard';
const routes: Routes = [
  {
    path:'',
    redirectTo:'uno',
    pathMatch:'full'
    /*prefix o full
    prefix:prende la prima parte dell'url fino al /
    full:prende tutto l'url
    */
  },
  {path:'uno',component:UnoComponent},
  {path:'due',component:DueComponent},

  // Deep Linking con parametro
  { path: 'due/:id', component: DueComponent },

  {path:'quattro',component:QuattroComponent},
  {path:'tre',component:TreComponent,canActivate:[CanActivateGuardGuard],children:[
    {path:'tre-uno',component:TreUnoComponent},
    {path:'tre-due',component:TreDueComponent},
  ]},
  /*catch di TUTTI gli url sbagliati*/
  {path:'**',component:UnoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
