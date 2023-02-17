import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactpagesComponent } from './pages/contactpages/contactpages.component';
import { ArtformpageComponent } from './pages/artformpage/artformpage.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactpagesComponent,
    ArtformpageComponent,
    SignupPageComponent,
    LoginpageComponent,
    NavbarComponent,
    FooterComponent,
    SinglepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
