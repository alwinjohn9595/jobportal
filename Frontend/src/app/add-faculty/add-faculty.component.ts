import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {
  hide=true;
  constructor(private admin:AdminService,private routes:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  signupForm = this.fb.group({
    uname:['',[Validators.required,,Validators.pattern(/^([a-z0-9]|[-._](?![-._])){5,20}$/)]],
    email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    hq:['',Validators.required],
    phoneno:['',[Validators.required,Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
    skill:['',Validators.required],
    experience:['',Validators.required],
    


  })  
  get signupFormControl() {
    return this.signupForm.controls;
  }


  signupUser() {
     
    this.admin.addfacultydata(this.signupForm.value).subscribe(
      res =>{
        
        alert("User sucessfully added");
        this.routes.navigate(["/admin"]); 
        
      },
      err =>{
         if(err.error.code === 11000){
           alert("email already in use");
         }else{
           alert("somting Went Worng");
           
           console.log(err);
           
         }
  
      }
      
    )
    
  }


  
}
