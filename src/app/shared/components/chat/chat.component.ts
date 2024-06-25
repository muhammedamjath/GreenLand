import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],

})
export class ChatComponent implements OnInit {

  constructor(private chatService:ChatService , private clientService:clientService){}


  messages:any=[]
  newMessage:string=''
  userData:any
  @Output() changeState:  EventEmitter<any> = new EventEmitter() ;
  changNotificatioin(){
    this.changeState.emit(false)
  }


  ngOnInit(): void {
    this.clientService.getUser().subscribe((res)=>{
      console.log('this id from chat:',res.userData);
      this.userData=res.userData
      
    })
    
    this.chatService.connect()
    this.chatService.onMessage().subscribe((message:any)=>{
      this.messages.push(message)
    })

    
  }
   sendMessage(){
    const message= {
      sender:this.userData._id,
      reciver:'cotractor',
      message:this.newMessage
    }
    console.log(message);
    
    this.chatService.sendMessage(message)
    this.newMessage=''
  }

   
}
