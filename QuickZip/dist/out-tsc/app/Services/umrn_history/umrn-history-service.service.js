import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
var UMRNHISTORYSERVICEService = /** @class */ (function () {
    function UMRNHISTORYSERVICEService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    //BindGridData(UMRN, CustomerName, RefrNo): Observable<UMRNHISTORYCLASS> {
    //    alert("Service" + UMRN + " " + CustomerName + RefrNo);
    //    return this._http.get<UMRNHISTORYCLASS>(this.baseUrl + 'api/BindData/' + UMRN + '/' + CustomerName + '/' + RefrNo);
    //}
    UMRNHISTORYSERVICEService.prototype.BindGridData = function (UMRN, CustomerName, RefrNo, UserId) {
        return this._http.post(this.baseUrl + 'api/BindData', +UMRN + '/' + CustomerName + '/' + RefrNo + '/' + UserId);
    };
    UMRNHISTORYSERVICEService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable.throw(error);
    };
    UMRNHISTORYSERVICEService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], UMRNHISTORYSERVICEService);
    return UMRNHISTORYSERVICEService;
}());
export { UMRNHISTORYSERVICEService };
//# sourceMappingURL=umrn-history-service.service.js.map