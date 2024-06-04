import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { signupModel } from 'src/app/models/signup';
import { userService } from 'src/app/services/UserService.service';

@Component({
  selector: 'app-contractor-signup',
  templateUrl: './contractor-signup.component.html',
  styleUrls: ['./contractor-signup.component.css']
})
export class ContractorSignupComponent {
  constructor(private userService:userService , private router:Router){}

  onSignupData(data: any) {
   
    const datas:signupModel = data as signupModel

    this.userService.contractorSignup(datas).subscribe(
      (res)=>{
        this.router.navigate(['/auth/login'])
      },
      (err)=>{
        console.log('error in contractor side:',err);
        
      }
    )

  }
}
