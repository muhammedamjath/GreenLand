import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { signupModel } from 'src/app/models/signup';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contractor-signup',
  templateUrl: './contractor-signup.component.html',
  styleUrls: ['./contractor-signup.component.css'],
})
export class ContractorSignupComponent {
  constructor(private authservice: authService, private router: Router) {}

  onSignupData(data: any) {
    const datas: signupModel = data as signupModel;

    this.authservice.contractorSignup(datas).subscribe(
      (res) => {
        if (res == 'email already used') {
          alert('this email is already used');
        } else if (res == 'status pending otp sent') {
          localStorage.setItem('signupData', JSON.stringify(datas));
          this.router.navigate(['/auth/SignupOtp']);
        } else if (res == 'incorrect email or password') {
          alert('incorrect email or password');
        } else {
          localStorage.setItem('signupData', JSON.stringify(datas));
          this.router.navigate(['/auth/SignupOtp']);
        }
      },
      (err) => {
        console.log('error in contractor side:', err);
      }
    );
  }
}
