import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import { signupModel } from "../models/signup";
import { Observable } from "rxjs";
import { signupOtp } from "../models/sinupOtp";
import { resetPasswordModel } from "../models/resetPass";
import { environment } from "src/environment/environment";

@Injectable({
  providedIn:"root"
})

export class authService{
  constructor(private http:HttpClient , private router:Router){}
  api = environment.baseUrl

  userSignupApi=`${this.api}/auth/userSignup`
  userSignup(data:signupModel):Observable <any>{
    return this.http.post(this.userSignupApi,data)
  }

  contractorSignupApi=`${this.api}/auth/contractorSignup`
  contractorSignup(data:signupModel):Observable <any>{
    return this.http.post(this.contractorSignupApi,data)
  }

  signupOtpApi=`${this.api}/auth/signupOtp`
  signupOtp(data:signupOtp):Observable <any>{
    return this.http.post(this.signupOtpApi,data)
  }

  resentOtpApi=`${this.api}/auth/resentOtp`
  resentOtp(data:signupOtp):Observable <any>{
    return this.http.patch(this.resentOtpApi,data)
  }

  fogetPasswordApi=`${this.api}/auth/forgetPassword`
  forgetPassword(data:resetPasswordModel):Observable <any>{
    return this.http.post(this.fogetPasswordApi,data)
  }
  
  resetPasswordOtpApi=`${this.api}/auth/resetPassword`
  resetPassword(data:signupOtp):Observable <any>{
    return this.http.post(this.resetPasswordOtpApi,data)
  }

  loginApi=`${this.api}/auth/login`
  login(data:resetPasswordModel):Observable <any>{
    return this.http.post(this.loginApi,data)
  }

}
