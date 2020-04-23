import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { User } from 'ClientApp/Models/User/user';
import { Users } from 'ClientApp/Models/User/users';



@Injectable({
    providedIn: 'root'
})
export class UserServiceService {
    baseUrl: string = "";
    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }
    getUser(EntityId, PageCount): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/User/getUserData/' + EntityId + '/' + PageCount);
    }
    getMakers(EntityId, UserId): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/User/getMakers/' + EntityId + '/' + UserId);

    }
    CheckIsPresentmentChecker(EntityId): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/User/CheckIsPresentmentChecker/' + EntityId);
    }

    SaveUser(em: any, EntityId, UserId): Observable<Users> {
        const body = em;
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<Users>(this.baseUrl + 'api/USer/SaveData/' + EntityId + '/' + UserId, body, {
            headers
        });
    }
    EditData(UserId): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/User/EditData/' + UserId);
    }
    UpdateUser(em: any, EntityId, UserId,Id): Observable<Users> {
        const body = em;
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<Users>(this.baseUrl + 'api/USer/UpdateData/' + EntityId + '/' + UserId + '/' + Id, body, {
            headers
        });
    }
}
 
