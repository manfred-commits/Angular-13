import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:'full'},
  {path:"home", component:MyComponentComponent},

  {path:"lazy",loadChildren:()=>import("./my-lazy-module/my-lazy-module.module").then(m=>m.MyLazyModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
