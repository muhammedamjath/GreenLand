import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { ContractorSignupComponent } from './components/contractor-signup/contractor-signup.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    LoginComponent,
    UserSignupComponent,
    ContractorSignupComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
