import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  btnStyle:string='flex  ml-4 mt-2 font-bold items-center hidden sm:block'
  loginBtnIcon:string='fa-solid fa-user'
  menuBtnIcon:string='fa-solid fa-bars'
  // menuBtnStyle:string='sm:hidden block mt-4 ml-[20%] h-[40px] w-[40px] '
}
