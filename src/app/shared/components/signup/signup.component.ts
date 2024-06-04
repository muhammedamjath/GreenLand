import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup

  constructor(private FormBuilder:FormBuilder){}

  @Output() signupData = new EventEmitter<any>()
;

  ngOnInit(){
    this.signupForm=this.FormBuilder.group({
        name:['Amjath',Validators.required],
        email:['a@gmail.com',[Validators.required,Validators.email]],
        mobNo:['8943454306',[Validators.required,Validators.pattern(/^\d{10}$/)]],
        password:['abcd',Validators.required],
      })
  }
    
  
  submitted = false;
  onSubmit(){
    this.submitted=true
    if (this.signupForm.valid) {
      const signupValues = {
        name: this.signupForm.value.name,
        email: this.signupForm.value.email,
        mobNo: this.signupForm.value.mobNo,
        password: this.signupForm.value.password,
      };
      this.signupData.emit(signupValues)       
    } else {
      alert('pls signup again')
    }
  }

  
  // image src changing due to the costemer
  @Input() imgSrc:string=''
  
}
