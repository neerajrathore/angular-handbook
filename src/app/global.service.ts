import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userName : any;
  userMobileNo : any;
  userMail : any;
  key : string = "profile";
  map ={
    userName: "user1",
    userMobileNo : "---",
    userMail :"domain@gmail.com"
  }
  constructor() { }
  userData=()=>{
    // this.userName ="user1";
    // this.userMobileNo = "---";
    // this.userMail="domain@gmail.com"
    let data = JSON.parse(localStorage.getItem('profile') as string);
    console.log("data",data);       
      this.userName = data.userName;
      this.userMobileNo = data.userMobileNo;       
      this.userMail = data.userMail;
      return data;
    
   
  }

  setData = () => {  
      localStorage.setItem(this.key, JSON.stringify(this.map));
  }
  getData = (key:any) => {
    localStorage.getItem(key);
  }
  logout(){
    localStorage.clear();
  }
}
