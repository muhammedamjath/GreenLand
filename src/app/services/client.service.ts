import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { componyReg } from "../models/componyRegistration";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class clientService{
    constructor(private http:HttpClient){}

    componyRegApi='http://localhost:3000/client/componyRegistration'
    componyReg(data:componyReg):Observable<any>{
        return this.http.post(this.componyRegApi,data)
    }
}