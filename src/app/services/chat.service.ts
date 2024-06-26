import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket!:Socket

  connect() {
    this.socket = io('http://localhost:3000');
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

  register(username: string) {
    this.socket.emit('register', username);
  }

  sendPrivateMessage(recipient: string, message: string) {
    this.socket.emit('private_message', { recipient, message });
  }

  onPrivateMessage(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('private_message', (message) => {
        observer.next(message);
      });
    });
  }

  
}
