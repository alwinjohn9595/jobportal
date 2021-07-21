import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  postdata(user:any){
    
    return this.http.post<any>("http://localhost:3000/admin/login",user)
  }
  
  
}
