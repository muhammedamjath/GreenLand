import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private FormBuilder:FormBuilder){}

  showDiv: boolean = false;

  
  loginForm!:FormGroup
  
  
  ngOnInit(){
    this.loginForm=this.FormBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  
  
  submitted = false;
  onSubmit(){
    this.submitted=true
    if(this.loginForm.valid){
      console.log('clicked');
      
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
