import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username = ""
  password = ""

  constructor(private route:Router){}

  login = () => {
    let data:any = {
      "username":this.username,
      "password":this.password
    }
    if (this.username == "admin" && this.password == "nestdigital") {
      alert("Authentication Success \b Welcome Admin")
      this.route.navigate(["/adminHome"])

    } else {
      alert("Login Failed!!!")
      this.username = ""
      this.password = ""
    }
  }
}
