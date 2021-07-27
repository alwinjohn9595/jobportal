import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {

  // jobpost=new jobpostModel('','','','','','','')
  ngOnInit(): void {
  }
  jobPostForm(){
    // this.jobpostservice.jobPost(this.jobpost)
    // alert ('job posted')
    // this.router.navigate([""])
  }
}
