import { Component, OnInit } from '@angular/core';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private clientService:clientService){}

  userData:any
  logoutDiv:boolean=false

  ngOnInit() {
    this.clientService.getUser().subscribe((res)=>{
      this.userData=res
      
    })
  }

  changeProfile(){

  }

  profileClick(){
    this.logoutDiv=!this.logoutDiv
  }

  logout(){

  }

}
