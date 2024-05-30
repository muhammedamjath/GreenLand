import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  
  signupBtnStyle:string='h-[35px] w-[200px] font-black font-mono rounded bg-[#FFC42A] text-[#00523F]  '
  signupBtnTittle:string='Register'

  inputStyle: string = 'w-[250px] h-6 bg-inherit border-l-2 border-r-0 border-t-0 border-b-0 border-indigo-500 text-[10px] pl-[10%] text-white focus:outline-none';

  
}
