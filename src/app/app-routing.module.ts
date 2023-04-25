import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from "./components/Pages/mix/about-us/about-us.component";
import {HomeComponent} from "./components/Pages/mix/home/home.component";
import {PageNotFoundComponent} from "./components/Pages/mix/page-not-found/page-not-found.component";
import {RoutingPaths} from "./interfaces/common-interfaces.service";
import {UserProfileComponent} from "./components/Pages/user-profile/user-profile.component";

const routes: Routes = [
  {path: RoutingPaths.HOME, component: HomeComponent },
  {path: RoutingPaths.USER_PROFILE, component: UserProfileComponent},
  {path: RoutingPaths.PAGE_NOT_FOUND, component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
