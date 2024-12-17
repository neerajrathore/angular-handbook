import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl  = "http://localhost:3000";
  // baseUrl ="";
  constructor(private httpClient: HttpClient) { }
  public get(API:any){  
    console.log("hi");
		// return this.httpClient.get(this.baseUrl+API);  
    return this.httpClient.get(API); 
	}  
}