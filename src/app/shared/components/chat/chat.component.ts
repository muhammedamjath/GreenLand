import { AfterViewChecked, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],

})
export class ChatComponent implements OnInit , AfterViewChecked   {

  @ViewChild('messageContainer') private messageContainer!: ElementRef;
  constructor(private chatService:ChatService , private clientService:clientService , private router:Router , private activeRoute:ActivatedRoute){}



  messages:any=[]
  newMessage:string=''
  userData:any
  reciverid:string=''
  componyId:string=''
  cloeseChat:boolean=true
  receiverData:any
  
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
      this.componyId=params['componyId']
    })
    
    this.chatService.receiverData(this.reciverid).subscribe((res)=>{
      this.receiverData=res
      
    })
    
    this.clientService.getUser().subscribe((res)=>{
      this.userData=res.userData
      
      this.chatService.register(this.userData._id)
      const obj={
        componyId:this.componyId,
        sender:this.userData._id,
        receiver:this.reciverid
      }
      this.chatService.chatHistoryget(obj).subscribe((res)=>{        
        for (let message of res[0].messages){
          this.messages.push(message)                    
        }
      })
    })
    

    this.chatService.connect()

    this.chatService.onMessage().subscribe((message:any)=>{      
      this.messages.push(message)
    })

    
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

   sendMessage(){    
    const message= {
      sender:this.userData._id,
      receiver:this.reciverid,
      componyId:this.componyId,
      message:this.newMessage,
    }
    
    this.chatService.chatPost(message).subscribe((res)=>{})

    this.messages.push(message)
    this.chatService.sendMessage(message)
    this.newMessage=''
  }
   
  scrollToBottom(): void {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
  }
}
