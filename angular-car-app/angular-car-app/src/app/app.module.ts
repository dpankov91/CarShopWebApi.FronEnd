import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { CarAddComponent} from "./car/car-add/car-add.component";
import {ReactiveFormsModule} from "@angular/forms";
import { CarUpdateComponent } from './car/car-update/car-update.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './authentication/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    NavbarComponent,
    WelcomeComponent,
    CarDetailsComponent,
    CarAddComponent,
    CarUpdateComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
