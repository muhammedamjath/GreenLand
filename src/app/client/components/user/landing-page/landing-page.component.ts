import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  userData:any
  allComponys:any
  constructor(private clientService:clientService , private router:Router, private activatedRoute: ActivatedRoute){}


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
    this.router.navigateByUrl(`/client/detailedView/${id}` );
    
  }

  

}
