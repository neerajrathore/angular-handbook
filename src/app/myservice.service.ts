import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  // constructor(private httpClient: HttpClient) { }
  
  private finaldata = [];
  private apiurl = "http://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  getData() {
     return this.http.get(this.apiurl);
  }
  profileData=()=>{
    console.log("user1");
    console.log("Jaipur");
    console.log("Rajasthan");
    
    
  }
}

