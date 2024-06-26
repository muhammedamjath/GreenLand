import { Component, OnInit } from '@angular/core';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private clientService:clientService ){}
  

  notification:any
  userData:any
  custemerData:any
  componyData:any
  fullNotification:boolean=false

  ngOnInit(): void {

    this.userData=this.clientService.userData    
    this.clientService.notificationGet(false).subscribe((res)=>{
      this.notification=res

    })
  }

  openNotification(id:string){
    this.clientService.singleNnotificationGet(id).subscribe((res)=>{
      console.log('response is :',res);
      this.custemerData=res.userData
      this.componyData=res.componyData 
      this.fullNotification=true
    })
    
  }

  closeDiv(){
    this.fullNotification=false
  }

}
