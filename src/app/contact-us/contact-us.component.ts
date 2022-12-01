import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name =""
  email = ""
  compony =""
  number = ""
  subject =""
  contact = () =>{
    let data:any = {
      "name":this.name,
      "email":this.email,
      "compony":this.compony,
      "number":this.number,
      "subject":this.subject
    }
    console.log(data)
    this.name =""
    this.email = ""
    this.compony =""
    this.number = ""
    this.subject =""
  }
}
