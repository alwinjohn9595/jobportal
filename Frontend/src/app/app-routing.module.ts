import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin/admin.component';
import { AluminiComponent } from './alumini/alumini.component';
import { AppComponent } from './app.component';
import { EditFacultyComponent } from './edit-faculty/edit-faculty.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { EmployerComponent } from './employer/employer.component';

import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"about",component:AboutusComponent},
  {path:"alumini",component:AluminiComponent},
  {path:"employer",component:EmployerComponent},
  
  {path:"admin",component:AdminComponent},
  {path:"admin/home",component:AdminHomeComponent},
  {path:"employer/login",component:EmployerLoginComponent},
  {path:"employer/home",component:EmployerHomeComponent},
  {path:"admin/editfaculty",component:EditFacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
