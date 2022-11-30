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
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';

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
  },
  {
    path:"employeeLogin",
    component:EmployeeLoginComponent
  },
  {
    path:"employeeReg",
    component:EmployeeRegComponent
  },
  {
    path:"employeeHome",
    component:EmployeehomeComponent
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
    AdminNavbarComponent,
    EmployeeLoginComponent,
    EmployeeRegComponent,
    EmployeehomeComponent
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
