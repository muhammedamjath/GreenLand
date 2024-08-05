import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment";


@Injectable({
    providedIn:'root'
})

export class homeSerice{
    constructor(private http:HttpClient){}

    api=environment.baseUrl

    getComponysApi=`${this.api}/client/getComponys`
    getComponys():Observable<any>{
        return this.http.get(this.getComponysApi)
    }
}