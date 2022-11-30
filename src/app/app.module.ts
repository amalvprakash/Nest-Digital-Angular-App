import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePAgeComponent } from './home-page/home-page.component';

const myRoute:Routes =[
  {
    path:"",
    component:HomePAgeComponent
  }
  ]
@NgModule({
  declarations: [
    AppComponent,
    HomePAgeComponent
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
