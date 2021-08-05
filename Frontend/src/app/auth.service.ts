import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user={
    email:'',
    password:''
    }
    helper=new JwtHelperService(); 

  loginUser(user:any)
  {
    console.log(user);
    return this.http.post<any>("http://localhost:3000/alumni/login",user)
   
  }
  constructor(private http: HttpClient) { }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

 isadmin(){
  const de = localStorage.getItem('token');

    const tx = JSON.stringify(de);
    
    if( de==null){
      return false;
    }else{
    
      const ty = this.helper.decodeToken(tx);
      
      if(ty.subject=="@"){
      
        return true;
      }else{
        
      return false;
      }
    }
  

  }
  getToken()
  {
    return localStorage.getItem('token')
  }

  isverified(){
    const de = localStorage.getItem('token');
  
      const tx = JSON.stringify(de);
      
      if( de==null){
        return false;
      }else{
      
        const ty = this.helper.decodeToken(tx);
        
        if(ty.state==true){
        
          return true;
        }else{
          
        return false;
        }
      }
    
  
    }
  





 }
 



