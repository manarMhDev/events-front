import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from 'src/shared/auth/auth.guard';
import { Titles1Component } from './pages/titles1/titles1.component';

const routes: Routes = [
  { path:'', component: HomeComponent ,  canActivate: [authGuard] },
  { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent ,  canActivate: [authGuard] },
  { path:'titles1', component: Titles1Component ,  canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
