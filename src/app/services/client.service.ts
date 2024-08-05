import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { componyReg } from "../models/componyRegistration";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn:'root'
})

export class clientService{
    componyData:any=''
    userData:any
   
    
    constructor(private http:HttpClient){}
    api= environment.baseUrl

    ProfilePhotoUpdateApi=`${this.api}/client/profilePhotoUpdate`
    profilePhotoUpdate(data:any):Observable<any>{
        return this.http.post(this.ProfilePhotoUpdateApi,data)
    }

    getUserDetailesApi=`${this.api}/client/getUser`
    getUser():Observable<any>{
        return this.http.get(this.getUserDetailesApi)
    }

    componyRegApi=`${this.api}/client/componyRegistration`
    componyReg(data:componyReg):Observable<any>{
        return this.http.post(this.componyRegApi,data)
    }

    registeredComponysApi=`${this.api}/client/registeredCompnys`
    registeredcomponys():Observable<any>{
        return this.http.get(this.registeredComponysApi)
    }
    
    updateComponyGetApi=`${this.api}/client/getSigleComponyDetailes/`
    componyDetails(id:any):Observable<any>{ 
        return this.http.get(`${this.updateComponyGetApi}${id}`);
    }
  
    updateCompony(data:componyReg):Observable<any>{
        const updateComponyApi=`${this.api}/client/updateCompony?id=${this.componyData._id}`
        return this.http.post(updateComponyApi,data)
    }

    getAllComponyApi=`${this.api}/client/getAllCompony`
    getAllCompony():Observable<any>{
        return this.http.get(this.getAllComponyApi)
    }

    notification(id:any):Observable<any>{
        const notificationApi=`${this.api}/client/notification?id=${id}`
        return this.http.post(notificationApi,id)
    }

    notificationGetApi=`${this.api}/client/notificationGet?id=`
    notificationGet(id:string|boolean):Observable<any>{
        return this.http.get(`${this.notificationGetApi}${id}`)
    }

    singleNotificationApi=`${this.api}/client/singleNotificationGet?id=`
    singleNnotificationGet(id:any):Observable<any>{
        return this.http.get(`${this.singleNotificationApi}${id}`)
    }

    sentApprovedEmailApi=`z${this.api}/client/approvedEmail`
    approvedEmailSend(data:any):Observable<any>{
        return this.http.post(this.sentApprovedEmailApi,data)
    }

    workHistoryApi=`${this.api}/client/workHistory`
    workHistoryGet():Observable<any>{
        return this.http.get(this.workHistoryApi)
    }

    locationSaveApi=`${this.api}/client/locationSave`
    locationSave(data:any):Observable<any>{
        return this.http.post(this.locationSaveApi,data)
    }

    detailedViewOfWork(id:string):Observable<any>{
       const  singleHistoryGet=`${this.api}/client/singleHisGet?id=`
        return this.http.get(singleHistoryGet + id)
    }

    taskUpdateApi=`${this.api}/client/taskUpdate`
    taskUpdate(obj:object):Observable<any>{
        return this.http.post(this.taskUpdateApi,obj)
    }

    deleteTaskApi = `${this.api}/client/deleteTaskUpdate`
    deleteTask(data:any):Observable<any>{
        return this.http.post(this.deleteTaskApi,data)
    }

    projectDetailesApi = `${this.api}/client/projectDetailes`
    projectDetailes(data:any):Observable<any>{
        return this.http.post(this.projectDetailesApi,data)
    }

    // confirmation/approved email sent by contractor
    confirmationEmailApi= `${this.api}/client/confirmationEmail`
    confirmationEmail(data:any):Observable<any>{
        return this.http.post(this.confirmationEmailApi,data)
    }

    // generate invoice
    generateInvoice(id:string):Observable<any>{
        const generateInvoiceApi = `${this.api}/client/generateInvoice?id=`
        return this.http.get(`${generateInvoiceApi}${id}`)
    }

    // reviwe posting
    reviewPostApi=`${this.api}/client/reviwePost`
    reviewPost(data:any):Observable<any>{
        return this.http.post(this.reviewPostApi,data)
    }

    // reviews get
    reviewsGet(id:string):Observable<any>{
        const reviewGetApi = `${this.api}/client/reviweGet?id=` 
        return this.http.get(`${reviewGetApi}${id}`)
    }

    // updating project status that is completed
    projectCompletedApi = `${this.api}/client/projectCompleted`
    projectCompleted(obj:any):Observable<any>{
        console.log('from service', obj);
        
        return this.http.post(this.projectCompletedApi,obj)
    }
}