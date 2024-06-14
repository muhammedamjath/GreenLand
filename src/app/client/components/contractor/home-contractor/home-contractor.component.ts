import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-home-contractor',
  templateUrl: './home-contractor.component.html',
  styleUrls: ['./home-contractor.component.css']
})
export class HomeContractorComponent implements OnInit {
  constructor(private clientService:clientService , private formBuilder:FormBuilder){}
  userData:any
  logoutDiv:boolean=true
  profileChangeForm!:FormGroup
  // profileImage:string=''
  showChangeProfileModal:boolean=false
  previewImageSrc:string=''
  imageFile:any = null

  buttonDisabled:boolean=false

  ngOnInit() {
    this.clientService.getUser().subscribe((res)=>{
      this.userData=res
    })

    this.profileChangeForm = this.formBuilder.group({
      image:[[],Validators.required]
    })
    // if(this.commonService.profileImage){
    //   this.profileImage=this.commonService.profileImage
    // }

  }

  changeProfile(){
    this.showChangeProfileModal=true
  }

  profileClick(){
    this.logoutDiv=!this.logoutDiv
  }

  submitProfilePicture(){
    
  }

  onImageUpload(data:any){
    this.profileChangeForm.value.image = data.target.files[0];
    this.previewImageSrc = URL.createObjectURL(data.target.files[0]);
    this.imageFile = data.target.files[0]
  }

  closeModal(){
    this.showChangeProfileModal=false
  }

}
