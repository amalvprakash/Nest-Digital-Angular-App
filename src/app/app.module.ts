import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePAgeComponent } from './home-page/home-page.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { GallaryComponent } from './gallary/gallary.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const myRoute:Routes =[
  {
    path:"",
    component:HomePAgeComponent
  },
  {
    path:"gallary",
    component:GallaryComponent
  },
  {
    path:"aboutUs",
    component:AboutUsComponent
  },
  {
    path:"contactUs",
    component:ContactUsComponent
  }
  ]
@NgModule({
  declarations: [
    AppComponent,
    HomePAgeComponent,
    HomeNavbarComponent,
    GallaryComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
