import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
@Component({
  selector: 'app-employer-home',
  templateUrl: './employer-home.component.html',
  styleUrls: ['./employer-home.component.css']
})
export class EmployerHomeComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

}
