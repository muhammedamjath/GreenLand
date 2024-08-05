import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private clientService:clientService , private router:Router){}
  

  notification:any
  userData:any
  custemerData:any
  componyData:any
  fullNotification:boolean=false
  emailBtnStatus:string='unread'
  
  // id for sent  gmail
  notificationId:string = ''

  ngOnInit(): void {

    this.userData=this.clientService.userData    
    this.clientService.notificationGet(false).subscribe((res)=>{
      this.notification=res
      
    })
  }

  openNotification(id:string){
    this.clientService.singleNnotificationGet(id).subscribe((res)=>{
      this.custemerData=res.userData
      this.componyData=res.componyData       
      this.notificationId=res.notificationData._id
      this.emailBtnStatus=res.notificationData.status
      this.fullNotification=true
      
    })
    
  }

  closeDiv(){
    this.fullNotification=false
  }

  sentApprovedEmail(id:string){
    const obj={
      notificationId : id,
      custemerData:this.custemerData,
      componyData:this.componyData
    }
    this.clientService.approvedEmailSend(obj).subscribe((res)=>{
      this.emailBtnStatus=res.status
      this.btnStyle()
    })
  }

  btnStyle(){
    return {
      'background-color': this.emailBtnStatus == 'mailed' ? '#ccc' : 'blue',
      'color': this.emailBtnStatus == 'mailed' ? '#666' : 'white',
    }
  }

  onChatMessage(id:string){
    this.router.navigate([`/client/chat/${id}/${this.componyData._id}`])
    
  }
 
  

}
