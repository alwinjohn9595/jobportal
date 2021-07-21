import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  hide=true;
    
  
  constructor(private fb:FormBuilder,
     private auth:AdminService,
    private routes:Router) { }
    
    loginForm = this.fb.group({
    
      

      email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
      
      
      })

  ngOnInit(): void {
  }
  get loginFormControl() {
      
    return this.loginForm.controls;
  }  

loginUser () {
    
  
  console.log(this.loginForm.value);
  this.auth.postdata(this.loginForm.value).subscribe(
    res =>{
      console.log("hai");
      console.log(res)
      alert("User sucessfully added");
      this.routes.navigate(["/admin/home"]);
      
    },
    err =>{
       if(err.status === 409){
         alert("Incorrect credentials");
       }else{
         alert("somthing went wrong");
         
         console.log(err);
         
       }

    }
    
  )
 

  
}


}
