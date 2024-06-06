import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  signupData: any = '';
  currentOption = 'signup';
  enteredOtp:string=''
  userEmail:String=''
  otpObj={}

   temp = localStorage.getItem('signupData');

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    if(this.temp) {
      this.signupData = JSON.parse(this.temp);
      this.userEmail = this.signupData.email; 
    }


    this.activatedRoute.queryParamMap.subscribe({
      next: (data: any) => {
        this.currentOption = data;
      }
    })

    
  }

  @Output() otp = new EventEmitter<any>

  onOtpChange(data:any){
      this.enteredOtp=data   
  }

  onSubmit() {
    
    if(this.enteredOtp.length==4){
      if (this.signupData) {
       
           this.otpObj={otp:this.enteredOtp,userEmail:this.userEmail}
           this.otp.emit(this.otpObj)
      }
    }


    switch(this.currentOption) {
      case 'change-password':
        console.log('change password');
        break;
      default:
        console.log('singup')
    }
  }

  resentOtp(){
    this.otpObj={otp:'',userEmail:this.userEmail}

    this.otp.emit(this.otpObj)
  }

}
