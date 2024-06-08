import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContractorSignupComponent } from './components/contractor-signup/contractor-signup.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { SignupOtpComponent } from './components/signup-otp/signup-otp.component';
import { ResetPasswordOtpComponent } from './components/reset-password-otp/reset-password-otp.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contractorSignup', component: ContractorSignupComponent },
  { path: 'userSignup', component: UserSignupComponent },
  { path: 'SignupOtp', component: SignupOtpComponent },
  { path: 'resetOtp', component: ResetPasswordOtpComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'newPassword', component: NewPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
  