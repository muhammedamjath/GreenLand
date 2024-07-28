import { Component,Input,Output,EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'compony-registration',
  templateUrl: './compony-registration.component.html',
  styleUrls: ['./compony-registration.component.css']
})
export class ComponyRegistrationComponent implements OnInit   {

  registerForm!:FormGroup
  constructor(private formBuilder:FormBuilder , private clientService:clientService , private activeteRoute:ActivatedRoute){}

  imageFile: any = null;
  imageUrl:string=''
  componyDetails: any;
  componyId:string=''

  
  @Input() submitBtnText:string=''
  @Input() isEditing = false;
  @Input() header:string=''
  @Output() registerData = new EventEmitter<any>


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      componyName:['' ,[Validators.required]],
      image:[[],[Validators.required]],
      location:['',[Validators.required]],
      category:['',[Validators.required]],
      discription:['',[Validators.required]]
    })
    
    this.activeteRoute.params.subscribe(params=>{
      this.componyId=params['id']
    })

    if(this.componyId){
      console.log(this.componyId);  
      
      this.clientService.componyDetails(this.componyId).subscribe((res)=>{
        this.componyDetails=res 
        if (this.componyDetails) {
          const { image, ...otherDetails } = this.componyDetails; 
          this.imageUrl = image; 
          this.registerForm.patchValue(otherDetails); 
        }
      })
    }

  }

  
 
  onImageChange(e: any){
    this.registerForm.value.image = e.target.files[0];
    this.imageUrl = URL.createObjectURL(e.target.files[0]);
    this.imageFile = e.target.files[0];
  }

  onSubmit(){
    
    if(this.registerForm.valid){
      
      this.emitData();
    } else if(!this.registerForm.valid && this.isEditing) {
      console.log('from udate');
      this.emitData();
    }
  }

  emitData() {
    const formData= new FormData()
    if(this.imageFile) {
      formData.append('image',this.imageFile);
    }
    formData.append('componyName',this.registerForm.value.componyName)
    formData.append('location',this.registerForm.value.location)
    formData.append('category',this.registerForm.value.category)
    formData.append('discription',this.registerForm.value.discription)
    
    this.registerData.emit(formData)
  }
}
