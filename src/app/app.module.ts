import { AuthGuardService } from './guards/auth.guard';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FollowersComponent } from './followers/followers.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupsComponent } from './groups/groups.component';
import { AllPostComponent } from './all-post/all-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';


export function appInitializerFactory(authService: AuthService) {
  return () => authService.isUserLoggedIn;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TimelineComponent,
    NavbarComponent,
    FollowersComponent,
    SuggestionComponent,
    CreatePostComponent,
    ProfileComponent,
    GroupsComponent,
    AllPostComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true,
      deps: [AuthService],
    },
    AuthService, AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
