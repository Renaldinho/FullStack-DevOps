import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/Pages/mix/home/home.component";
import {AboutUsComponent} from "./components/Pages/mix/about-us/about-us.component";

const routes: Routes = [
  {path: 'path', component: AboutUsComponent},
  {path: 'caca', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
