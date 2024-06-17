import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { resetPasswordModel } from 'src/app/models/resetPass';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private FormBuilder:FormBuilder , private authservice:authService , private router:Router){}

  showDiv: boolean = false;

  
  loginForm!:FormGroup
  
  
  ngOnInit(){
    this.loginForm=this.FormBuilder.group({
      email:['muhammedamjath0@gmail.com',[Validators.required,Validators.email]],
      password:['Amjath@123',Validators.required]
    })
  }
  
  
  submitted = false;
  onSubmit(){
    this.submitted=true
    if(this.loginForm.valid){
       const objData={email:this.loginForm.value.email,password:this.loginForm.value.password}
      const sentData:resetPasswordModel = objData as resetPasswordModel
      this.authservice.login(sentData).subscribe(
        (res)=>{
          console.log(res);
          
          if(res.data.category == 'user'){
            console.log(res.token);
              localStorage.setItem('token',res.token)
              this.router.navigate(['/client/userLandPage'])
                
          }else if (res.data.category == 'contractor'){
            localStorage.setItem('token',res.token)
            this.router.navigate(['/client/contractorHome'])

          }else if (res.status=='incorrect password'){
              
          }else if (res.status == 'userData not fount'){
            alert('pls login')
          }
          
        }
      )
    }
    else{
      console.log('not'); 
    }
  }

  // optional div function call
  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

}
