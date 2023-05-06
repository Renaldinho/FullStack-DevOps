import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/Pages/mix/home/home.component";
import {PageNotFoundComponent} from "./components/Pages/mix/page-not-found/page-not-found.component";
import {RoutingPaths} from "./interfaces/common-interfaces.service";
import {UserProfileComponent} from "./components/Pages/user-profile/user-profile.component";
import {SignInComponent} from "./components/Pages/public/sign-in/sign-in.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: RoutingPaths.HOME, component: HomeComponent, canActivate: [AuthGuard] },
  {path: RoutingPaths.USER_PROFILE, component: UserProfileComponent,canActivate: [AuthGuard] },
  {path: RoutingPaths.SIGN_IN,component: SignInComponent},
  {path: RoutingPaths.PAGE_NOT_FOUND, component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
