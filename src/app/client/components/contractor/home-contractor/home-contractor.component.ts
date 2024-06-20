import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-home-contractor',
  templateUrl: './home-contractor.component.html',
  styleUrls: ['./home-contractor.component.css']
})
export class HomeContractorComponent implements OnInit {
  constructor(private clientService:clientService , private formBuilder:FormBuilder , private router:Router){}
  userData:any
  logoutDiv:boolean=false
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
      image:[[]]
    })
    

  }

  changeProfile(){
    this.showChangeProfileModal=true
  }

  profileClick(){
    this.logoutDiv=!this.logoutDiv
  }

  submitProfilePicture(){
    console.log('dai');
    
    if(this.profileChangeForm.valid){
      this.buttonDisabled=true
      const data= new FormData()
      data.append('image',this.imageFile)
      console.log('data is :',data);
      
      this.clientService.profilePhotoUpdate(data).subscribe((res)=>{
        this.showChangeProfileModal=false
        // location.reload()
        this.userData=res
        this.imageFile=null
        this.previewImageSrc ="";
        this.buttonDisabled = false; 
      },
    (err)=>{
      console.log(err);
      this.buttonDisabled=false
    })
    }
  }

  onImageUpload(data:any){
    console.log('hai');
    
    this.profileChangeForm.value.image = data.target.files[0];
    this.previewImageSrc = URL.createObjectURL(data.target.files[0]);
    this.imageFile = data.target.files[0]
  }

  closeModal(){
    this.showChangeProfileModal=false;
    this.previewImageSrc ="";
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

}
