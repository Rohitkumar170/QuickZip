import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { UMRNUpload } from '../../../models/umrnupload/maingrid';

@Injectable({
  providedIn: 'root'
})
export class UmrnUploadService {
    baseUrl: string = "";
    UserId: string = "";
    EntityId: string = "";
    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    BindGrid(): Observable<any> {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
       

        return this._http.get<any>(this.baseUrl + 'api/UMRNUpload/BindGrid/' + this.EntityId);

    } 



    BindOnRowdblClick(UploadHeaderId): Observable<any> {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;


        return this._http.get<any>(this.baseUrl + 'api/UMRNUpload/BindOnRowdblClick/' + UploadHeaderId);

    } 
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }  
}