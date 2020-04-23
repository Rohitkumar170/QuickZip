import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
var UmrnUploadService = /** @class */ (function () {
    function UmrnUploadService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.UserId = "";
        this.EntityId = "";
        this.baseUrl = myAppUrl;
    }
    UmrnUploadService.prototype.BindGrid = function () {
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        return this._http.get(this.baseUrl + 'api/UMRNUpload/BindGrid/' + this.EntityId);
    };
    UmrnUploadService.prototype.BindOnRowdblClick = function (UploadHeaderId) {
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        return this._http.get(this.baseUrl + 'api/UMRNUpload/BindOnRowdblClick/' + UploadHeaderId);
    };
    UmrnUploadService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable.throw(error);
    };
    UmrnUploadService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], UmrnUploadService);
    return UmrnUploadService;
}());
export { UmrnUploadService };
//# sourceMappingURL=umrn-upload.service.js.map