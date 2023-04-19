import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/Pages/public/sign-in/sign-in.component';
import { HomeComponent } from './components/Pages/mix/home/home.component';
import { AboutUsComponent } from './components/Pages/mix/about-us/about-us.component';
import { PageNotFoundComponent } from './components/Pages/mix/page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    AboutUsComponent,
    PageNotFoundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
