
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AlumniService } from '../alumni.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-alumini',
  templateUrl: './alumini.component.html',
  styleUrls: ['./alumini.component.css']
})
export class AluminiComponent implements OnInit {

  hide = true;





  constructor(private fb: FormBuilder,
    // private auth: AuthService,
    private routes: Router,
    private alumni: AlumniService,
    private _auth: AuthService,
    private _router: Router) { }
  alumnidetails = {
    uname: '',
    email: '',
    password: '',
    hq: '',
    city: ''
  }

  
  loginForm = this.fb.group({



    email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],


  })

  signupForm = this.fb.group({
    uname: ['', [Validators.required,]],
    email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    hq: ['', Validators.required],
    city: ['', Validators.required]
  })





  get loginFormControl() {

    return this.loginForm.controls;
  }

  get signupFormControl() {
    return this.signupForm.controls;
  }

  ngOnInit(): void {
    console.log(this)
  }

  user = {
    email: '',
    password: ''
  }

  loginUser() {


    this._auth.loginUser(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this._router.navigate(['alumni/home'])
        },
        err => {
          console.log(err);
          alert("invalid login details")
        }
      )
  }







signupUser() {

  this.alumni.addalumni(this.alumnidetails);
  console.log("Called");
  alert("Success");
  this.routes.navigate([""])
}

  }
