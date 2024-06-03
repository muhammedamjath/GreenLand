import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup

  constructor(private FormBuilder:FormBuilder){}

  ngOnInit(){
    this.signupForm=this.FormBuilder.group({
        name:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        mobNo:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
        password:['',Validators.required]
      })
  }
    
  
  submitted = false;
  onSubmit(){
    this.submitted=true
    if(this.signupForm.valid){
      console.log('clicked');
      
    }
    else{
      console.log('not');
      
    }
    
    
  }

  
  // image src changing due to the costemer
  @Input() imgSrc:string=''
  
}
