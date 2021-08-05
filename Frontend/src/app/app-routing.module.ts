import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin/admin.component';
import { AluminiComponent } from './alumini/alumini.component';
import { AlumniHomeComponent } from './alumni-home/alumni-home.component';

import { ApplyJobComponent } from './apply-job/apply-job.component';
import { EditFacultyComponent } from './edit-faculty/edit-faculty.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { EmployerComponent } from './employer/employer.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { AuthGuard } from './auth.guard';

import { IndexComponent } from './index/index.component';

import { UpdateAlumniComponent } from './update-alumni/update-alumni.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"alumni",component:AluminiComponent},
  {path:"employer",component:EmployerComponent},
  
  {path:"admin",component:AdminComponent},
  {  path:"admin/home",
     canActivate:[AuthGuard],
     component:AdminHomeComponent},
  {  path:"employer-login",
     component:EmployerLoginComponent},
  { path:"employerHome",
    canActivate:[AuthGuard],
    component:EmployerHomeComponent},
  { path:"admin/editfaculty",
    canActivate:[AuthGuard],
    component:EditFacultyComponent},
  { path:'applicant',
    canActivate:[AuthGuard],
    component:AppliedJobsComponent},
  { path:"alumni/home",
    canActivate:[AuthGuard],
    component:AlumniHomeComponent},
  { path:"applyjob",
    canActivate:[AuthGuard],
    component:ApplyJobComponent},
  { path:"alumni/update",
    canActivate:[AuthGuard],
    component:UpdateAlumniComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
