import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user={
    email:'',
    password:''
    }
  

  loginUser(user:any)
  {
    return this.http.post<any>("http://localhost:3000/login",user)
   
  }
  constructor(private http: HttpClient) { }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
}
