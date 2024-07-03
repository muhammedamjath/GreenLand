import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],

})
export class ChatComponent implements OnInit {

  constructor(private chatService:ChatService , private clientService:clientService , private router:Router , private activeRoute:ActivatedRoute){}


  messages:any=[]
  newMessage:string=''
  userData:any
  reciverid:string=''
  cloeseChat:boolean=true
  @Output() changeState:  EventEmitter<any> = new EventEmitter() ;
  changchatStatus(){
    this.changeState.emit(false)
    this.cloeseChat=false
    if(this.userData.category=='contractor'){
      this.router.navigate(['/client/contractorHome'])
    }else{
      this.router.navigate(['/client/userLandPage'])
    }
  }


  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.reciverid = params['id'];
    })
    
    
    this.clientService.getUser().subscribe((res)=>{
      this.userData=res.userData
      
      this.chatService.register(this.userData._id)
    })
    

    this.chatService.connect()

    this.chatService.onMessage().subscribe((message:any)=>{
      console.log('this is message:',message);
      
      this.messages.push(message)
    })

    
  }
   sendMessage(){
    const message= {
      sender:this.userData._id,
      receiver:this.reciverid,
      message:this.newMessage,
    }
    
    this.chatService.chatPost(message).subscribe((res)=>{
      console.log('res is :',res);
      
    })

    this.messages.push(message)
    this.chatService.sendMessage(message)
    this.newMessage=''
  }

   
}
