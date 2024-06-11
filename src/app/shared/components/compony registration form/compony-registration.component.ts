import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'compony-registration',
  templateUrl: './compony-registration.component.html',
  styleUrls: ['./compony-registration.component.css']
})
export class ComponyRegistrationComponent implements OnInit {

  registerForm!:FormGroup
  constructor(private formBuilder:FormBuilder){}

  imageUrl:string=''
  imageFile: any = null;

  @Output() registerData = new EventEmitter<any>

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      componyName:['' ,[Validators.required]],
      image:[[],[Validators.required]],
      location:['',[Validators.required]],
      category:['',[Validators.required]],
      discription:['',[Validators.required]]
    })

  }

  onImageChange(e: any){
    this.registerForm.value.image = e.target.files[0];
    this.imageUrl = URL.createObjectURL(e.target.files[0]);

    this.imageFile = e.target.files[0];
  }

  onSubmit(){
    if(this.registerForm.valid){
      const registerValues={
        ...this.registerForm.value,
        image: this.imageFile
      }
      
      this.registerData.emit(registerValues)
    }

  }

}
