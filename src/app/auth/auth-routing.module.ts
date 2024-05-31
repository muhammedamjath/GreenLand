import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContractorSignupComponent } from './components/contractor-signup/contractor-signup.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'contractorSignup',component:ContractorSignupComponent},
  {path:'userSignup',component:UserSignupComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
