import * as tslib_1 from "tslib";
/// <reference path="../../services/report-vew/report-view.service.ts" />
/// <reference path="../../../models/report-view/binduser.ts" />
import { Component } from '@angular/core';
import { ReportViewService } from '../../services/report-vew/report-view.service';
import { FormBuilder } from '@angular/forms';
var ReportViewComponent = /** @class */ (function () {
    function ReportViewComponent(reportviewService, formBuilder) {
        this.reportviewService = reportviewService;
        this.formBuilder = formBuilder;
        this.Preloader = true;
    }
    ReportViewComponent.prototype.ngOnInit = function () {
        this.BindUser();
    };
    ReportViewComponent.prototype.BindUser = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        //var jasondata = {
        //    "UserId": item.UserId
        //}
        this.userId = item.UserId;
        this.reportviewService.BindUser(this.userId).
            subscribe(function (data) {
            _this.binduser = data.Table;
        });
    };
    ReportViewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-report-view',
            templateUrl: './report-view.component.html',
            styleUrls: ['./report-view.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ReportViewService, FormBuilder])
    ], ReportViewComponent);
    return ReportViewComponent;
}());
export { ReportViewComponent };
//# sourceMappingURL=report-view.component.js.map