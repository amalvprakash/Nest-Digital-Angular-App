import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css']
})
export class EmployeeRegComponent {
  empId = ""
  firstName = ""
  lastName = ""
  houseNumber = ""
  houseNAme = ""
  streetName = ""
  pinCode = ""
  district = ""
  state = ""
  country = ""
  mobile = ""
  emailId = ""
  parentNAme = ""
  gender = ""
  highestDegree = ""
  yearsOfExperience = ""
  doj = ""
  username = ""
  password = ""
  confirmPassword = ""

  constructor(private route:Router){}

  employeeReg = () =>{
    let data:any ={
      "empId":this.empId,
      "firstName":this.firstName,
      "lastName":this.lastName,
      "houseNumber":this.houseNumber,
      "houseNAme":this.houseNAme,
      "streetName":this.streetName,
      "pinCode":this.pinCode,
      "district":this.district,
      "state":this.state,
      "country":this.country,
      "mobile":this.mobile,
      "emailId":this.emailId,
      "parentNAme":this.parentNAme,
      "gender":this.gender,
      "highestDegree":this.highestDegree,
      "yearsOfExperience":this.yearsOfExperience,
      "doj":this.doj,
      "username":this.username,
      "password":this.password,
      "confirmPassword":this.confirmPassword
    }
    
    if (this.password == this.confirmPassword) {
      alert("Employee Registered Successfully")
      this.route.navigate(["/employeeLogin"])
    } else {
      alert("Passwords Didn't Match!!!\ntry again!")
      this.password = ""
      this.confirmPassword = ""
    }

  }
}
