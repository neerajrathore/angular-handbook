import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
// import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
// import { DataTableDirective } from 'angular-datatables';
import { FormControl } from '@angular/forms';
import { Test } from '../test.model';
import { GlobalService } from '../global.service';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}
interface Student {
  student_name: any;
  father_name: any;
  student_address: any;
  studentdob: any;
  student_mobile: any;
  student_email: any;
  student_department: any;

}
const countries: string[] = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria"
]

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // countries = COUNTRIES;

  typeahead: FormControl = new FormControl();
  countries: string[] = countries;
  suggestions: string[] = [];
  item: string = "Hello Child How are you"
  items = ['item1', 'item2', 'item3', 'item4'];
  @Output() newItemEvent = new EventEmitter<string>();
  arrayName = [1, 2, 3, 4, 5, 5, 6, 6, 7];
  products = [];
  t1 = null;
  fName: string = '';
  studentList: Student[] = [];
  bb: any;
  // studentList = [];
  jsonObjet = [{
    "fname": "Jay",
    "mname": "Prakash",
    "lname": "Mahto"
  },
  {
    "fname": "Jay",
    "mname": "Kishor",
    "lname": "Yadav"
  }
  ];
  // test: Test = new Test();
  test: Test[] = [
    new Test(1, "john", "sedwik", 5000, "jaipur"),
    new Test(2, "Ram", "Kumar", 6000, "Jodhpur"),
    new Test(3, "Fran", "andrew", 10000, "Udaypur")
  ];
  // @ViewChild(DataTableDirective, {static: false})
  public persondata: any = [];
  // constructor(private apiService: ApiService,private httpClient:HttpClient) { }
  constructor(private httpClient: HttpClient, public global: GlobalService) { }

  ngOnInit() {
    this.getUserProfile();
    this.getStudentList();
    this.global.getDataFromLocalStorage("").subscribe((data: any) => {
      // this.persondata = Array.from(Object.keys(data), k=>data[k]);
      // console.log(this.persondata);
      console.log("data", data);
      this.global.profileData();
      this.global.setData();
      this.global.userData();



    });
    console.log(this.test);
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  getUserProfile = () => {
    console.log("heloo");
    this.httpClient.get('someapi').subscribe((data: any) => {
      console.log("helloo");
      console.log(data);
      this.products = data.Data;
      console.log("this.products", this.products);

    })
  }

  getStudentList = () => {
    console.log("heloo");
    this.httpClient.get('http://localhost:8080/demo/getStudentList').subscribe((data: any) => {
      console.log("helloo");
      console.log(data);
      this.studentList = data.data;
      console.log("this.studentList", this.studentList);

    })
  }

  suggest() {
    // let bb;
    this.bb = (this.typeahead.value).toUpperCase()
    console.log(this.bb);

    this.suggestions = this.countries
      .filter(c => c.startsWith(this.bb))
      .slice(0, 50);

    // this.suggestions = this.countries.filter(c=> c.toLowerCase().indexOf(this.typeahead.value.toLowerCase())>-1 

  }
  search = () => {
    // console.log("textinput",this.t1);
    let i;
    for (i = 0; i < this.test.length - 1; i++) {
      if (this.test[i]['firstName'] == this.t1) {
        console.log(this.test[i]['firstName']);
        this.fName = this.test[i]['firstName'];
      }
      else
        console.log("not found");

    }

  }

  redirect = () => {
    console.log("redirect");
    console.log('location.href', window.location.href);
    window.location.href = '';
  }
}
