import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import { signupModel } from "../models/signup";
import { Observable } from "rxjs";
import { signupOtp } from "../models/sinupOtp";
import { resetPasswordModel } from "../models/resetPass";

@Injectable({
  providedIn:"root"
})

export class userService{
  constructor(private http:HttpClient , private router:Router){}

  userSignupApi='http://localhost:3000/client/userSignup'
  userSignup(data:signupModel):Observable <any>{
    return this.http.post(this.userSignupApi,data)
  }

  contractorSignupApi='http://localhost:3000/client/contractorSignup'
  contractorSignup(data:signupModel):Observable <any>{
    return this.http.post(this.contractorSignupApi,data)
  }

  signupOtpApi='http://localhost:3000/client/signupOtp'
  signupOtp(data:signupOtp):Observable <any>{
    return this.http.post(this.signupOtpApi,data)
  }

  resentOtpApi='http://localhost:3000/client/resentOtp'
  resentOtp(data:signupOtp):Observable <any>{
    return this.http.patch(this.resentOtpApi,data)
  }

  fogetPasswordApi='http://localhost:3000/client/forgetPassword'
  forgetPassword(data:resetPasswordModel):Observable <any>{
    return this.http.post(this.fogetPasswordApi,data)
  }
  
  resetPasswordOtpApi='http://localhost:3000/client/resetPassword'
  resetPassword(data:signupOtp):Observable <any>{
    return this.http.post(this.resetPasswordOtpApi,data)
  }

}