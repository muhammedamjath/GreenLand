import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
 constructor(private userService:clientService , private formBuilder:FormBuilder , private router:Router){}


 logoutDiv:boolean=false
  showChangeProfileModal:boolean=false
  imageFile:any = null
  profileChangeForm!:FormGroup
  previewImageSrc:string=''
  buttonDisabled:boolean=false 
  userData:any
  unreadMessageCount:number=0
  messages:any[]=[]

  ngOnInit() {
    this.userService.getUser().subscribe((res)=>{
      this.userData=res.userData
      this.messages=res.messages
      const messages:any[]=res.messages
      messages.forEach(data =>{
        if(data.status == 'unread'){
          this.unreadMessageCount++
        }
      })
    },
  (err)=>{
    console.log('the errr is :',err);
    if(err.error == 'Invalid token' ){}
      localStorage.removeItem('token')
      this.router.navigate(['/auth/login'])
  })

    this.profileChangeForm = this.formBuilder.group({
      image:[[]]
    })
    
  }

  submitProfilePicture(){    
    if(this.profileChangeForm.valid){
      this.buttonDisabled=true
      const data= new FormData()
      data.append('image',this.imageFile)
      console.log('data is :',data);
      
      this.userService.profilePhotoUpdate(data).subscribe((res)=>{
        this.showChangeProfileModal=false
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

  profileClick(){
    this.logoutDiv=!this.logoutDiv
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  changeProfile(){
    this.showChangeProfileModal=true
  }

  closeModal(){
    this.showChangeProfileModal=false;
    this.previewImageSrc ="";
  }

  onImageUpload(data:any){    
    this.profileChangeForm.value.image = data.target.files[0];
    this.previewImageSrc = URL.createObjectURL(data.target.files[0]);
    this.imageFile = data.target.files[0]
  }
}
