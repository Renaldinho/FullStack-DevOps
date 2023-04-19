import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from "./components/Pages/mix/about-us/about-us.component";
import {HomeComponent} from "./components/Pages/mix/home/home.component";
import {PageNotFoundComponent} from "./components/Pages/mix/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'path', component: AboutUsComponent},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
