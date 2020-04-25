import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
var AllumrnService = /** @class */ (function () {
    function AllumrnService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    AllumrnService.prototype.BindGrid = function (Entityid, Pageno) {
        alert("Service" + Entityid + " " + Pageno);
        return this._http.get(this.baseUrl + 'api/Allumrn/BindGrid/' + Entityid + '/' + Pageno);
    };
    //SearchData(UMRN, CustomerName, ReferenceNumber, entityid): Observable<Searchdetails> {
    //    alert("Service" + UMRN + " " + CustomerName + ReferenceNumber + entityid);
    //    return this._http.get<Searchdetails>(this.baseUrl + 'api/Allumrn/SearchData/' + UMRN + '/' + CustomerName + '/' + ReferenceNumber + '/' + entityid);
    //}
    AllumrnService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable.throw(error);
    };
    AllumrnService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], AllumrnService);
    return AllumrnService;
}());
export { AllumrnService };
//# sourceMappingURL=allumrn.service.js.map