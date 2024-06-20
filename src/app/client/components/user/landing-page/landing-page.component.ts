import { Component, OnInit, Output } from '@angular/core';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  userData:any
  allComponys:any
  constructor(private clientService:clientService){}


  ngOnInit() {
    this.clientService.getUser().subscribe((res)=>{
      this.userData=res
    })

    this.clientService.getAllCompony().subscribe((res)=>{
      this.allComponys=res
      console.log(this.allComponys);
    })
    
  }

  shareId(id:any){
    
    
  }

  

}
