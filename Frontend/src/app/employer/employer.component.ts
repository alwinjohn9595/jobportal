import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  emp={
    name:"",
    email:"",
    phone:"",
    company:"",
    password:"",
    conpassword:"",
    compdesc:""
  }

  pwdmsg:any;
  color:any;
  errmsg:any


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addEmployee(){
    if(this.emp.conpassword==this.emp.password){
      alert("Profile is created");
    }else{
      this.errmsg="Passwword doesn't match"
    }
  }
  validatePassword(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
    var enoughRegex = new RegExp("(?=.{3,}).*", "g");

    if(false == enoughRegex.test(this.emp.password)){
      this.pwdmsg="too short!!",
      this.color="text-danger"
    }
    else if (strongRegex.test(this.emp.password)){
      this.pwdmsg="Strong",
      this.color="text-success"
    }
    else if (mediumRegex.test(this.emp.password)){
      this.pwdmsg="Medium",
      this.color="text-warning"
    }
    
    else {
      this.pwdmsg="oops!.. its weak",
      this.color="text-danger"
    }
  }

}
