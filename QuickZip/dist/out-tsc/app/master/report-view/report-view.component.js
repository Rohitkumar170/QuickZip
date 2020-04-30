import * as tslib_1 from "tslib";
/// <reference path="../../../models/report-view/bindgrid.ts" />
/// <reference path="../../services/report-vew/report-view.service.ts" />
/// <reference path="../../../models/report-view/binduser.ts" />
import { Component } from '@angular/core';
import { ReportViewService } from '../../services/report-vew/report-view.service';
import { FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
var ReportViewComponent = /** @class */ (function () {
    function ReportViewComponent(reportviewService, formBuilder, route) {
        this.reportviewService = reportviewService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.dataArray = [];
        this.Preloader = true;
    }
    ReportViewComponent.prototype.ngOnInit = function () {
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.UMRNUploadform = this.formBuilder.group({
            ddluser: new FormControl(),
            FromDate: [''],
            ToDate: ['']
        });
        this.showlabel = false;
        this.Preloader = false;
        // let item = JSON.parse(sessionStorage.getItem('User'));
        this.userId = item.UserId;
        this.BindUser();
    };
    //isFieldValid(field: string) {
    //    return !this.SearchData.get(field).valid && this.SearchData.get(field).touched;for
    //}
    ReportViewComponent.prototype.BindUser = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.userId = item.UserId;
        this.reportviewService.BindUser(this.userId).
            subscribe(function (data) {
            console.log(data);
            _this.binduser = data.Table;
            var y = Object.entries(_this.binduser)[0][1];
            // console.log(y);
            //// alert(y.sponsorbankcode);
            // var u = y.UserId;
            // console.log(u);
            //var k = formatDate(new Date(), "yyyy-MM-dd", "en");
            //   this.PostData(k, k, u);
        });
        // this.BindUser();
    };
    ReportViewComponent.prototype.GetAllData = function (ddluser, FromDate, ToDate) {
        var _this = this;
        //alert(ddluser + "   " + FromDate + "   " + Todate);
        var item = JSON.parse(sessionStorage.getItem('User'));
        ////this.username = this.UMRNUploadform.controls['ddluser'].value();
        //this.FromDate = this.UMRNUploadform.controls['FromDate'].value();
        //this.ToDate = this.UMRNUploadform.controls['ToDate'].value();
        //this.username = (<HTMLSelectElement>document.getElementById('ddluser')).value;
        //this.FromDate = (<HTMLSelectElement>document.getElementById('FromDate')).value;
        //this.ToDate = (<HTMLSelectElement>document.getElementById('ToDate')).value;
        this.reportviewService.SearchData(ddluser, FromDate, ToDate, item.UserId).subscribe(function (data) {
            _this.Preloader = false;
            _this.bindgrid = data.Table;
            _this.dataArray.push(_this.bindgrid);
            // alert(this.dataArray.length);
            //console.log(this.Databind);
        });
    };
    // currentDate = new Date();
    ReportViewComponent.prototype.PostData = function (FromDate, Todate, userdrop) {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        var username = this.UMRNUploadform.controls['ddluser'].value();
        // let username = this.selectedLevel;
        this.reportviewService.SearchData(FromDate, Todate, username, item.UserId).subscribe(function (data) {
            _this.Preloader = false;
            _this.bindgrid = data.Table;
            _this.dataArray.push(_this.bindgrid);
            // alert(this.dataArray.length);
            //console.log(this.Databind);
        });
        if (this.dataArray.length > 0) {
            // alert(this.dataArray.length);
            this.showlabel = true;
        }
    };
    ReportViewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-report-view',
            templateUrl: './report-view.component.html',
            styleUrls: ['./report-view.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ReportViewService, FormBuilder, Router])
    ], ReportViewComponent);
    return ReportViewComponent;
}());
export { ReportViewComponent };
//# sourceMappingURL=report-view.component.js.map