import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signupOtp } from 'src/app/models/sinupOtp';
import { userService } from 'src/app/services/UserService.service';

@Component({
  selector: 'app-reset-password-otp',
  templateUrl: './reset-password-otp.component.html',
  styleUrls: ['./reset-password-otp.component.css'],
})
export class ResetPasswordOtpComponent implements OnInit {
  constructor(private router: Router, private userService: userService) {}
  resetEmail: any = '';

  ngOnInit() {
    const temp = localStorage.getItem('resetEmail');

    if (temp) {
      this.resetEmail = JSON.parse(temp);
    }
    if (!this.resetEmail) {
      this.router.navigateByUrl('/auth/login');
    }
  }

  onSubmit(data: any) {
    const otpData: signupOtp = data as signupOtp;
    console.log(data);

    this.userService.resetPassword(otpData).subscribe((res) => {
      if (res == 'otp verification success') {
        this.router.navigateByUrl('/auth/newPassword');
      } else if ('no user fount') {
        alert('no user data fount.pla login');
      } else {
        alert('incorrect otp');
      }
    });
  }
}
