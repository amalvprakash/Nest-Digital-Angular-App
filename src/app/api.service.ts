import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  addCourse = (dataToSend:any) => {
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",dataToSend)
  }
  addFriends = (dataToSend:any) => {
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",dataToSend)
  }
  viewCourses = () =>{
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  viewFriends = () =>{
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }

}
