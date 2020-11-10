import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {CarListComponent} from "./car/car-list/car-list.component";
import {CarDetailsComponent} from "./car/car-details/car-details.component";
import {CarAddComponent} from "./car/car-add/car-add.component";
import {CarUpdateComponent} from "./car/car-update/car-update.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'cars', component: CarListComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'car-add', component: CarAddComponent},
  {path: 'car-update/:id', component: CarUpdateComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
