/// <reference path="../../../models/nachtransactionpresentation/nachtransactionpresentation.ts" />

import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { BankBind, CheckUser, BindGridForm } from '../../../models/nachtransactionpresentation/nachtransactionpresentation'

@Injectable({
  providedIn: 'root'
})
export class NachtransactionporesentationService {
    baseUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }
    BankBind(EntityId, UserId): Observable<BankBind> {
        //alert("Service" + FromDate + " " + ToDate + Bank);
        return this._http.get<BankBind>(this.baseUrl + 'api/NachtransactionPresentation/BankBind/' + EntityId + '/' + UserId);
       
    }

    CheckUser(EntityId, UserId): Observable<CheckUser> {
        return this._http.get<CheckUser>(this.baseUrl + 'api/NachtransactionPresentation/CheckUser/' + EntityId + '/' + UserId);

    }

    BindGridForm(EntityId, UserId, Bank): Observable<BindGridForm> {
        //alert("Service" + FromDate + " " + ToDate + Bank);
        alert('Hii');
        return this._http.get<BindGridForm>(this.baseUrl + 'api/NachtransactionPresentation/BindGridForm/' + EntityId + '/' + UserId + '/' + Bank);
    }
    //paras


    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }   

}
