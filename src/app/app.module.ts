import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/Pages/public/sign-in/sign-in.component';
import { HomeComponent } from './components/Pages/mix/home/home.component';
import { AboutUsComponent } from './components/Pages/mix/about-us/about-us.component';
import { PageNotFoundComponent } from './components/Pages/mix/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavBarComponent } from './components/Pages/mix/nav-bar/nav-bar.component';
import { NavButtonComponent } from './components/generic/nav-button/nav-button.component';
import { UserAvatarComponent } from './components/generic/images/user-avatar/user-avatar.component';
import { UserProfileComponent } from './components/Pages/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthOptionsComponent } from './components/Pages/auth-options/auth-options.component';
import { InputFieldComponent } from './components/generic/input-field/input-field.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    NavBarComponent,
    NavButtonComponent,
    UserAvatarComponent,
    UserProfileComponent,
    AuthOptionsComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
