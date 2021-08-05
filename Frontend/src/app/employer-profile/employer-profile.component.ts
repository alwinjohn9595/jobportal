import { Component, OnInit } from '@angular/core';
import { EmployerdataService } from '../employerdata-service.service';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {
  employerProfile={
    name:"",
    email:'',
    phone:'',
    company:'',
    compdesc:''
  }
  constructor( private employerservice:EmployerdataService ) { }

  ngOnInit(): void {
    let email=localStorage.getItem("employeremail")
    
    this.employerservice.getEmployer(email)
    .subscribe((data)=>{
      this.employerProfile=JSON.parse(JSON.stringify(data))
    })
  }

}
