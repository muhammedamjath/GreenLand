import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  
  
  btnStyle:string='flex  ml-4 mt-2 font-bold items-center hidden sm:block'
  
  menuBtnIcon:string='fa-solid fa-bars'
  
  

}
