import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { resetPasswordModel } from 'src/app/models/resetPass';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css'],
})
export class NewPasswordComponent implements OnInit {
  newPassword!: FormGroup;
  recoverPasswordEmail: any = '';

  constructor(
    private formbuilder: FormBuilder,
    private authservice: authService,
    private router: Router
  ) {}

  ngOnInit() {
    const temp = localStorage.getItem('resetEmail');

    if (temp) {
      this.recoverPasswordEmail = JSON.parse(temp);
    }
    if (!this.recoverPasswordEmail) {
      this.router.navigateByUrl('/auth/login');
    }

    this.newPassword = this.formbuilder.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/
          ),
        ],
      ],
    });
  }

  onPasswordSubmit = false;
  passwordSubmit() {
    this.onPasswordSubmit = true;
    if (this.newPassword.valid) {
      const recoverEmail = this.recoverPasswordEmail.email;
      const password = this.newPassword.value.password;
      const data = { email: recoverEmail, password: password };

      const datas: resetPasswordModel = data as resetPasswordModel;
      this.authservice.forgetPassword(datas).subscribe((res) => {
        localStorage.removeItem('resetEmail');
        this.router.navigateByUrl('/auth/login');
      });
    }
  }
}
