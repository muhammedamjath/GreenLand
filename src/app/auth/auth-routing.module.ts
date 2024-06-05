import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContractorSignupComponent } from './components/contractor-signup/contractor-signup.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { OtpComponent } from './components/otpComponent/otp.component';
import { SignupOtpComponent } from './components/signup-otp/signup-otp.component';
import { ResetPasswordOtpComponent } from './components/reset-password-otp/reset-password-otp.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'contractorSignup',component:ContractorSignupComponent},
  {path:'userSignup',component:UserSignupComponent},
  {path:'SignupOtp',component:SignupOtpComponent},
  {path:'resetOtp',component:ResetPasswordOtpComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
