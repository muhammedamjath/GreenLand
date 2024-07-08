import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-detailed-compony-view',
  templateUrl: './detailed-compony-view.component.html',
  styleUrls: ['./detailed-compony-view.component.css']
})
export class DetailedComponyViewComponent implements OnInit {

  constructor(private route:ActivatedRoute , private clientService:clientService , private fb: FormBuilder){}

  connectionForm!: FormGroup;

  componyId:string=''
  componyDetailes:any
  btnStatus:any=null
  btndisabled:boolean=false
  conncetionform:boolean=false
  spinner:boolean=false

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.componyId = params['id'];
    })
    
    this.clientService.componyDetails(this.componyId).subscribe((res)=>{
      this.componyDetailes=res      
    })

    this.clientService.notificationGet(this.componyId).subscribe((res)=>{
      this.btnStatus=res
      if(this.btnStatus){        
        this.btndisabled=true
      }
    })


      this.connectionForm = this.fb.group({
        componyId: [this.componyId],
        district: ['', Validators.required],
        placeOfWork: ['', Validators.required],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
      });



}

  onConnect(id:any){
    let  that = this;
    
    this.clientService.notification(id).subscribe((res)=>{
      this.btnStatus=res
      this.spinner=true
      this.btndisabled=true
      setTimeout(function(){
        that.conncetionform = true;
        that.spinner=false
      },1000);
     
   },
  (err)=>{
    console.log(err);
  })
    
}

onSubmit() {
  if (this.connectionForm.valid) {
    this.clientService.locationSave(this.connectionForm.value).subscribe((res)=>{
      this.conncetionform=false
    })
  }

}

btnStyle(){
  return {
    'background-color': this.btndisabled ? '#ccc' : 'blue',
  }
}

closeForm(){
  this.conncetionform=false
}

}