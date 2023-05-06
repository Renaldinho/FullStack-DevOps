import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from "./components/Pages/mix/about-us/about-us.component";
import {HomeComponent} from "./components/Pages/mix/home/home.component";
import {PageNotFoundComponent} from "./components/Pages/mix/page-not-found/page-not-found.component";
import {RoutingPaths} from "./interfaces/common-interfaces.service";
import {UserProfileComponent} from "./components/Pages/user-profile/user-profile.component";
import {SignInComponent} from "./components/Pages/public/sign-in/sign-in.component";
import {ContentComponent} from "./components/Pages/content/content.component";

const routes: Routes = [
  {path: RoutingPaths.SIGN_IN, component: SignInComponent},
  {path: RoutingPaths.CONTENT, component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
