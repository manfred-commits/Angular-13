import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileService } from './profile.service';

@NgModule({
  declarations: [
    ProfileComponentComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  providers:[
    ProfileService
  ],
  exports:[
    ProfileComponentComponent
  ]
})
export class ProfileModule { }
