import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-detailed-compony-view',
  templateUrl: './detailed-compony-view.component.html',
  styleUrls: ['./detailed-compony-view.component.css']
})
export class DetailedComponyViewComponent implements OnInit {
  constructor(private route:ActivatedRoute , private clientService:clientService){}
  componyId:string=''
  componyDetailes:any
  btnStatus:any=null
  btndisabled:boolean=false

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.componyId = params['id'];
    })
    
    this.clientService.componyDetails(this.componyId).subscribe((res)=>{
      this.componyDetailes=res      
    })

    this.clientService.notificationGet(this.componyId).subscribe((res)=>{
      this.btnStatus=res
      if(this.btnStatus){        
        this.btndisabled=true
      }
    })


}

  onConnect(id:any){
   this.clientService.notification(id).subscribe((res)=>{
    this.btnStatus=res
   this.btndisabled=true
     
   },
  (err)=>{
    console.log(err);
  })
    
}

btnStyle(){
  return {
    'background-color': this.btndisabled ? '#ccc' : 'blue',
  }
}

}