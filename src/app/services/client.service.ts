import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { componyReg } from "../models/componyRegistration";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class clientService{
    componyData:any=''
    userData:any
   
    
    constructor(private http:HttpClient){
        
    }

    ProfilePhotoUpdateApi='http://localhost:3000/client/profilePhotoUpdate'
    profilePhotoUpdate(data:any):Observable<any>{
        return this.http.post(this.ProfilePhotoUpdateApi,data)
    }

    getUserDetailesApi='http://localhost:3000/client/getUser'
    getUser():Observable<any>{
        return this.http.get(this.getUserDetailesApi)
    }

    componyRegApi='http://localhost:3000/client/componyRegistration'
    componyReg(data:componyReg):Observable<any>{
        return this.http.post(this.componyRegApi,data)
    }

    registeredComponysApi='http://localhost:3000/client/registeredCompnys'
    registeredcomponys():Observable<any>{
        return this.http.get(this.registeredComponysApi)
    }
    
    updateComponyGetApi='http://localhost:3000/client/getSigleComponyDetailes/'
    componyDetails(id:any):Observable<any>{ 
        return this.http.get(`${this.updateComponyGetApi}${id}`);
    }
  
    updateCompony(data:componyReg):Observable<any>{
        const updateComponyApi=`http://localhost:3000/client/updateCompony?id=${this.componyData._id}`
        return this.http.post(updateComponyApi,data)
    }

    getAllComponyApi='http://localhost:3000/client/getAllCompony'
    getAllCompony():Observable<any>{
        return this.http.get(this.getAllComponyApi)
    }

    notification(id:any):Observable<any>{
        const notificationApi='http://localhost:3000/client/notification?id='+id
        return this.http.post(notificationApi,id)
    }

    notificationGetApi='http://localhost:3000/client/notificationGet?id='
    notificationGet(id:string|boolean):Observable<any>{
        return this.http.get(`${this.notificationGetApi}${id}`)
    }

    singleNotificationApi='http://localhost:3000/client/singleNotificationGet?id='
    singleNnotificationGet(id:any):Observable<any>{
        return this.http.get(`${this.singleNotificationApi}${id}`)
    }

    sentApprovedEmailApi='http://localhost:3000/client/approvedEmail'
    approvedEmailSend(data:any):Observable<any>{
        return this.http.post(this.sentApprovedEmailApi,data)
    }

    workHistoryApi='http://localhost:3000/client/workHistory'
    workHistoryGet():Observable<any>{
        return this.http.get(this.workHistoryApi)
    }

    locationSaveApi='http://localhost:3000/client/locationSave'
    locationSave(data:any):Observable<any>{
        return this.http.post(this.locationSaveApi,data)
    }

    detailedViewOfWork(id:string):Observable<any>{
       const  singleHistoryGet='http://localhost:3000/client/singleHisGet?id='
        return this.http.get(singleHistoryGet + id)
    }

    taskUpdateApi='http://localhost:3000/client/taskUpdate'
    taskUpdate(obj:object):Observable<any>{
        return this.http.post(this.taskUpdateApi,obj)
    }

    deleteTaskApi = 'http://localhost:3000/client/deleteTaskUpdate'
    deleteTask(data:any):Observable<any>{
        return this.http.post(this.deleteTaskApi,data)
    }

    projectDetailesApi = 'http://localhost:3000/client/projectDetailes'
    projectDetailes(data:any):Observable<any>{
        return this.http.post(this.projectDetailesApi,data)
    }

    // confirmation/approved email sent by contractor
    confirmationEmailApi= 'http://localhost:3000/client/confirmationEmail'
    confirmationEmail(data:any):Observable<any>{
        return this.http.post(this.confirmationEmailApi,data)
    }

    // generate invoice
    generateInvoice(id:string):Observable<any>{
        const generateInvoiceApi = 'http://localhost:3000/client/generateInvoice?id='
        return this.http.get(`${generateInvoiceApi}${id}`)
    }
}