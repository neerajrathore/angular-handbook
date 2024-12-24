import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

// import { AccordionModule } from 'ngx-bootstrap';
@NgModule({
  
  declarations: [
    AppComponent,  // router-outlet is not known element
    AddStudentComponent,
    StudentListComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    NgbModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    RouterOutlet,
    RouterModule,
    // NgbAccordionModule
    // NgForm
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // fixes ngb-accordion and ngb-panel error
})
export class AppModule { }
