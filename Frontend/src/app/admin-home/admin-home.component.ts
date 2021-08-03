import { Component, OnInit } from '@angular/core';
import { AlumniService } from '../alumni.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {


  facultydata = [{
    uname: '',
    email: '',
    hq: '',
    phoneno: '',
    experience:'',
    skill:'',
    status: '',
  }]

  constructor(private alumni:AlumniService) { }

  ngOnInit(): void {
    this.alumni.getalumnidetails().subscribe((data)=>{
      this.facultydata=JSON.parse(JSON.stringify(data))

  }
    )
}






save(alumni:any) {
     
  console.log(alumni)
  this.alumni.savealumni(alumni);   
    alert("Success");
    this.ngOnInit();
    
  
}








}
