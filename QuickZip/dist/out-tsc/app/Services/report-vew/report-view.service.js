import * as tslib_1 from "tslib";
/// <reference path="../../../models/report-view/BindUser.ts" />
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ReportViewService = /** @class */ (function () {
    function ReportViewService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    ReportViewService.prototype.BindUser = function (UserId) {
        return this._http.get(this.baseUrl + 'api/ReportView/BindUser/' + UserId);
    };
    ReportViewService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], ReportViewService);
    return ReportViewService;
}());
export { ReportViewService };
//# sourceMappingURL=report-view.service.js.map