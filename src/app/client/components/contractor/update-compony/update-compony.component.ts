import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { componyReg } from 'src/app/models/componyRegistration';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update-compony',
  templateUrl: './update-compony.component.html',
  styleUrls: ['./update-compony.component.css']
})
export class UpdateComponyComponent implements OnInit {


  constructor(private router:Router ,private activeRoute:ActivatedRoute , private clientService:clientService){}

  // componyId:string=''
  // componyData:any
  ngOnInit(): void {

    // this.activeRoute.params.subscribe(params =>{
    // this.componyId=params['id']
      
    // this.clientService.componyDetails(this.componyId).subscribe((res)=>{
    //     this.componyData=res
    //     console.log('response from update:',res);
        
    //   })
      

    // })
    
  }

  updateCompony(event:any){
    const data:componyReg =event as componyReg
    this.clientService.updateCompony(data).subscribe((res)=>{
      this.router.navigate(['/client/contractorHome'])
      
    })
  }

}
