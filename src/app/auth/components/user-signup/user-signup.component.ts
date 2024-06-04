import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { signupModel } from 'src/app/models/signup';
import { userService } from 'src/app/services/UserService.service';

@Component({
  selector: 'user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  constructor(private userService:userService ,private router:Router){}

  onSignupData(data: any) {
    const datas:signupModel=data as signupModel
    
    this.userService.userSignup(datas).subscribe(
      (res)=>{
        this.router.navigate(['/auth/login'])
        
      },
      (err:any)=>{
        console.log('error is:',err);
        
      }
    )
  }
}
