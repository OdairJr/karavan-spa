import { SignupComponent } from './../components/signup/signup.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../components/common/layout/layout.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: '', pathMatch: 'full', redirectTo: '/home' }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'account', component: LayoutComponent, children: [
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
