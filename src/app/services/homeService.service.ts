import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class homeSerice{
    constructor(private http:HttpClient){}

    getComponysApi='http://localhost:3000/client/getComponys'
    getComponys():Observable<any>{
        return this.http.get(this.getComponysApi)
    }
}