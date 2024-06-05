import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { ContractorSignupComponent } from './components/contractor-signup/contractor-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OtpComponent } from './components/otpComponent/otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { SignupOtpComponent } from './components/signup-otp/signup-otp.component';
import { ResetPasswordOtpComponent } from './components/reset-password-otp/reset-password-otp.component';




@NgModule({
  declarations: [
    LoginComponent,
    UserSignupComponent,
    ContractorSignupComponent,
    OtpComponent,
    SignupOtpComponent,
    ResetPasswordOtpComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgOtpInputModule 
  ]
})
export class AuthModule { }
