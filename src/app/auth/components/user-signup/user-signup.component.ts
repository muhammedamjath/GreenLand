import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signupModel } from 'src/app/models/signup';
import { userService } from 'src/app/services/UserService.service';

@Component({
  selector: 'user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent {
  constructor(private userService: userService, private router: Router) {}

  onSignupData(data: any) {
    const datas: signupModel = data as signupModel;

    this.userService.userSignup(datas).subscribe(
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
      (err: any) => {
        console.log('error is:', err);
      }
    );
  }
}
