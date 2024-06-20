import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
 constructor(private userService:clientService , private router:Router){}


 logoutDiv:boolean=false

 userData:any
  ngOnInit() {
    this.userService.getUser().subscribe((res)=>{
      this.userData=res
      
    })
    
  }

  profileClick(){
    this.logoutDiv=!this.logoutDiv
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  changeProfile(){

  }
}
