import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  username =""
  password = ""

  constructor(private route:Router){}

  login = () =>{
    let data:any = {
      "username":this.username,
      "password":this.password
    }
    if (this.username == "1122" && this.password == "password") {
      alert("Authentication Success \b Welcome ")
      this.route.navigate(["/employeeHome"])
    } else {
      alert("Login Failed!!!")
      this.username = ""
      this.password = ""
    }
  }
}
