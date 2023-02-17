import { NgModule } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { RouterModule, Routes } from '@angular/router';
import { ArtformpageComponent } from './pages/artformpage/artformpage.component';
import { ContactpagesComponent } from './pages/contactpages/contactpages.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [


{
  path:'', component : HomepageComponent
},
{
  path:'contact',component:ContactpagesComponent
},
{
  path:'signup',component : SignupPageComponent
},
{
  path:'artform',component : ArtformpageComponent
},
{
  path:'login',component : LoginpageComponent
},
{
  path:'single',component:SinglepageComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
