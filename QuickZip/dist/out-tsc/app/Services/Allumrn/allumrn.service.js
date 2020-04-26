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
    AllumrnService.prototype.GridBind = function (Entityid, Pageno) {
        // alert("Service" + Entityid + " " + Pageno );
        return this._http.get(this.baseUrl + 'api/AllUMRN/GridBind/' + Entityid + '/' + Pageno);
    };
    //SearchData(em: any): Observable<GridData> {
    //    const body = em;
    //   //  alert(body);
    //    const headers = new HttpHeaders().set('content-type', 'application/json');
    //    return this._http.post<Umrn_Class>(this.baseUrl + 'api/AllUMRN/SearchData', body, {
    //        headers
    //    });
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