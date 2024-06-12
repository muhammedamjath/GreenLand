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
      const formData= new FormData()
      formData.append('image',this.imageFile)
      formData.append('componyName',this.registerForm.value.componyName)
      formData.append('location',this.registerForm.value.location)
      formData.append('category',this.registerForm.value.category)
      formData.append('discription',this.registerForm.value.discription)
      
      
      this.registerData.emit(formData)
    }

  }

}
