import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  // signupData: any = '';
  currentOption = 'signup';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const temp = localStorage.getItem('signupData');

    // if(temp) {
    //   this.signupData = JSON.parse(temp);
    // }


    this.activatedRoute.queryParamMap.subscribe({
      next: (data: any) => {
        this.currentOption = data;
      }
    })

    // if(!this.signupData) {
    //   this.router.navigateByUrl('/auth/userSignup')
    // }
  }

  @Output() otp = new EventEmitter<any>

  enteredOtp:string=''
  otpObj={}
  onOtpChange(data:any){
      this.enteredOtp=data   
  }

  onSubmit() {
    
    if(this.enteredOtp.length==4){
      let userEmail:String=''
      const signupData=localStorage.getItem('signupData')
      if (signupData) {
       
          const parsedData = JSON.parse(signupData);
           userEmail = parsedData.email; // Assuming 'email' is the key in localStorage
        
      }
      this.otpObj={otp:this.enteredOtp,userEmail:userEmail}
      this.otp.emit(this.otpObj)
      localStorage.removeItem('signupData')
    }


    switch(this.currentOption) {
      case 'change-password':
        console.log('change password');
        break;
      default:
        console.log('singup')
    }
  }

}
