import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { signupOtp } from 'src/app/models/sinupOtp';
import { authService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup-otp',
  templateUrl: './signup-otp.component.html',
  styleUrls: ['./signup-otp.component.css'],
})
export class SignupOtpComponent implements OnInit {
  constructor(private router: Router, private authservice: authService) {}
  signupData: any = '';

  ngOnInit(): void {
    const temp = localStorage.getItem('signupData');

    if (temp) {
      this.signupData = JSON.parse(temp);
    }
    if (!this.signupData) {
      this.router.navigateByUrl('/auth/userSignup');
    }
  }

  onSubmit(data: any) {
    const otpData: signupOtp = data as signupOtp;

    this.authservice.signupOtp(otpData).subscribe((res) => {
      if (res == 'otp verification success') {
        localStorage.removeItem('signupData');
        this.router.navigate(['/auth/login']);
      } else if (res == 'otp verification failed') {
        alert('worng otp');
      }
    });
  }
}
