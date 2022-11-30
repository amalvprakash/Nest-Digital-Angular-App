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
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

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
  },
  {
    path:"adminLogin",
    component:AdminLoginComponent
  },
  {
    path:"adminHome",
    component:AdminHomeComponent
  }
  ]
@NgModule({
  declarations: [
    AppComponent,
    HomePAgeComponent,
    HomeNavbarComponent,
    GallaryComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
