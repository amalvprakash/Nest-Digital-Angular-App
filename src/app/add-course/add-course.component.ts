import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  courseTitle =""
  courseDescription=""
  courseDate=""
  courseDuration=""
  courseVenue=""

  constructor(private api:ApiService){}

  addCourseData = () => {
    let data:any={
      "courseTitle":this.courseTitle,
      "courseDescription":this.courseDescription,
      "courseDuration":this.courseDuration,
      "courseDate":this.courseDate,
      "courseVenue":this.courseVenue
    }
    this.api.addCourse(data).subscribe(
      (response:any) => {
        console.log(response)
        if (response.status == "success") {
          alert("Course Added SuccessFully")
          this.courseTitle = ""
          this.courseDescription = ""
          this.courseDate = ""
          this.courseDuration = ""
          this.courseVenue = ""
        } else {
          alert("Something Went Wrong")
        }
      }
    )
  }

}
