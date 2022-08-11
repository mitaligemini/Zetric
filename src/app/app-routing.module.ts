import { UpdatePostComponent } from './update-post/update-post.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'timeline', component:TimelineComponent, canActivate:[AuthGuardService]},
  {path:'myProfile', component:UserProfileComponent, canActivate:[AuthGuardService]},
  {path:'update/:id', component:UpdatePostComponent, canActivate:[AuthGuardService]},
  
  {path:'**', component:LoginComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
