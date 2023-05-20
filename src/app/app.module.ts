import {ErrorHandler, NgModule} from '@angular/core';
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
import { UserSettingsOptionsComponent } from './components/blocks/user-settings-options/user-settings-options.component';
import { UserSettingsComponent } from './components/blocks/user-settings/user-settings.component';
import { ButtonComponent } from './components/generic/button/button.component';
import { UserSettingsProfileDisplayComponent } from './components/blocks/user-settings-profile-display/user-settings-profile-display.component';
import { ServiceManagementComponent } from './components/Pages/service-management/service-management.component';
import { ServiceComponent } from './components/blocks/service/service.component';
import { AccountSettingsComponent } from './components/Pages/account-settings/account-settings.component';
import { SecuritySettingsComponent } from './components/Pages/security-settings/security-settings.component';
import {SimpleNotificationsModule} from "angular2-notifications";
import {ErrorManagerService} from "./services/error-manager.service";
import { InputBoxComponent } from './components/generic/input-box/input-box.component';

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
    InputFieldComponent,
    UserSettingsOptionsComponent,
    UserSettingsComponent,
    ButtonComponent,
    UserSettingsProfileDisplayComponent,
    ServiceManagementComponent,
    ServiceComponent,
    AccountSettingsComponent,
    SecuritySettingsComponent,
    InputBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: ErrorManagerService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
