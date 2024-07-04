import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  constructor(private chatServeice:ChatService , private router:Router , private clientService:clientService){}

  chatListDat:any
  userData:any
  ngOnInit(): void {
   this.clientService.getUser().subscribe((res)=>{
    this.userData=res.userData
    console.log('res:',res);
    
   })

    this.chatServeice.chatList().subscribe((res)=>{
      console.log('this is from chat list bai:',res);
      this.chatListDat=res
      
    })
  }

  getSelect(id:string ,componyId:string){  
    console.log('form ;ist:',id);
      
    this.router.navigate([`/client/chat/${id}/${componyId}`])
  }

}
