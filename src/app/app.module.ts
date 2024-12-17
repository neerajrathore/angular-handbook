import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,NgForm } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http'; 
import { ApiService } from './api.service'; 
//import {DataTablesModule} from 'angular-datatables'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// import { AccordionModule } from 'ngx-bootstrap';
@NgModule({
  
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentListComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    
    // FormsModule,  
    // ReactiveFormsModule,  
    // HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule,
    NgbModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    // NgForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
