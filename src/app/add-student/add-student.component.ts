import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder  } from '@angular/forms';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentName :any;
  fatherName :any;
  studentAddress :any;
  studentDOB :any;
  studentMobile :any;
  studentEmail :any;
  studentDepartment : any;
  // studentList = [];
  // name = new FormControl('');
  profileForm : any;
  isSubmitted = false;
  // profileForm = new FormGroup({
  //   firstName: new FormControl('',[Validators.required]),
  //   lastName: new FormControl(''),
  // });
  constructor(private httpClient:HttpClient,public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.compose([
        Validators.minLength(10),        
        // Validators.maxLength(10),
        // Validators.pattern("^[6-9][0-9]{9}$"),
        Validators.required
      ])],
      lastName: ['', Validators.compose([
        Validators.minLength(8),
        // Validators.pattern("[0-9a-z-A-Z@.#*$!?&+-/]*"),
        Validators.required
      ])],
    });
    // console.log("name",this.name);
    
  }
  get errorControl() {
    return this.profileForm.controls;
  }
save = () =>{
  console.log("submit form") 
  let formData ={
    studentName : this.studentName,
    fatherName : this.fatherName,
    studentAddress : this.studentAddress,
    studentDOB : this.studentDOB,
    studentMobile : this.studentMobile,
    studentEmail : this.studentEmail,
    studentDepartment : this.studentDepartment,
  }  
  console.log("formdata",formData);
  console.log("heloo");
    this.httpClient.post('http://localhost:8080/demo/addStudent',formData).subscribe((data: any)=>{  
    console.log("helloo");
    
    console.log("this.products",data);
    
  })  
  
}

// updateName() {
//   this.name.setValue('Nancy');
// }

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}
}
