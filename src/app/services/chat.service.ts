import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient){}
  api=environment.socketUrl

  private socket!:Socket

  connect() {
    this.socket = io(this.api);
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

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  // chat post api 
  chatPostApi=`${this.api}/client/chatPost`
  chatPost(data:object):Observable<any>{
    return this.http.post(this.chatPostApi,data)
  }

  getChatListApi=`${this.api}/client/chatList`
  chatList():Observable<any>{
    return this.http.get(this.getChatListApi)
  }
  
  chatHistoryget(data:object):Observable<any>{
    const chatHistoryGetApi=`${this.api}/client/chatHistory`
    return this.http.post(chatHistoryGetApi,data)
  }

  receiverData(id:string):Observable<any>{
    const receiverDetailesApi=`${this.api}/client/receiverData?id=`
    return this.http.get(`${receiverDetailesApi}${id}`)
  }
}
