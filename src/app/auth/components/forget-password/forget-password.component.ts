import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { resetPasswordModel } from 'src/app/models/resetPass';
import { userService } from 'src/app/services/UserService.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  recoverPasswordEmail!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private userService: userService,
    private router: Router
  ) {}

  ngOnInit() {
    this.recoverPasswordEmail = this.formbuilder.group({
      email: [
        'muhammedamjath0@gmail.com',
        [Validators.email, Validators.required],
      ],
    });

    
  }

  emailSection = true;
  submitEmail = false;
  emailSubmit() {
    this.submitEmail = true;

    if (this.recoverPasswordEmail.valid) {
      const recoverEmail = this.recoverPasswordEmail.value.email;
      const password: string = '';
      const data = { email: recoverEmail, password: password };

      const datas: resetPasswordModel = data as resetPasswordModel;

      this.userService.forgetPassword(datas).subscribe((res) => {
        if (res == 'no user data fount') {
          alert('no user data fount.pls signup');
          this.router.navigateByUrl('/auth/userSignup');
        } else {
          localStorage.setItem('resetEmail', JSON.stringify(datas));
          this.router.navigate(['/auth/resetOtp']);
        }
      });
    }
  }

  
}
