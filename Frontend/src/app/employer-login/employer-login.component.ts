import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})
export class EmployerLoginComponent implements OnInit {

  
  emp={
    email:"",
    password:""
  }
  constructor(private router:Router) { }
    
    

  ngOnInit(): void { }
  loginEmp(){
    alert("Succesfully logged in")
    this.router.navigate(["/employerHome"])
  }
}
