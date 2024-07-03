import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient){}

  private socket!:Socket

  connect() {
    this.socket = io('http://localhost:3000');
  }

  register(senderId: string) {
    this.socket.emit('register', senderId);
  }

  sendMessage(message:any){    
    this.socket.emit('sendMessage',message)
  }

  onMessage():Observable<any>{
    return new Observable(observer =>{
      this.socket.on('recivedMessage',(message) => {
        observer.next(message)
      })
    })
  }

  // chat post api 
  chatPostApi='http://localhost:3000/client/chatPost'
  chatPost(data:object):Observable<any>{
    return this.http.post(this.chatPostApi,data)
  }

  
}
