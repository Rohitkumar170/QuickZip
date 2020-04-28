import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NachtransactionporesentationService } from 'ClientApp/app/Services/nachtransactionpresentation/nachtransactionporesentation.service';
var NachtransactionpresentationComponent = /** @class */ (function () {
    function NachtransactionpresentationComponent(NTPService) {
        this.NTPService = NTPService;
        // var EntityId;
        // var UserId;
        this.bank = 25;
        this.userid = 86;
        this.EntityId = 10;
    }
    NachtransactionpresentationComponent.prototype.ngOnInit = function () {
        this.BankBind();
        this.CheckUser();
        //this.BindGridForm();
    };
    NachtransactionpresentationComponent.prototype.BankBind = function () {
        var _this = this;
        //let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BankBind('86', '10').
            subscribe(function (res) { return _this.bankbind = res; }, function (error) { return console.log(error); });
    };
    NachtransactionpresentationComponent.prototype.CheckUser = function () {
        //let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.CheckUser('86', '10').
            subscribe(function (data) {
            //this.bankbind = data.Table;
            //this.i = Object.entries(this.bankbind)[0][1];
        });
    };
    NachtransactionpresentationComponent.prototype.BindGridForm = function (bank, userid, EntityId) {
        var _this = this;
        this.NTPService.BindGridForm('25', '86', '10').
            subscribe(function (res) { return _this.bindgrid = res; }, function (error) { return console.log(error); });
        //this.Databind = data;
        // });
    };
    NachtransactionpresentationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-nachtransactionpresentation',
            templateUrl: './nachtransactionpresentation.component.html',
            styleUrls: ['./nachtransactionpresentation.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [NachtransactionporesentationService])
    ], NachtransactionpresentationComponent);
    return NachtransactionpresentationComponent;
}());
export { NachtransactionpresentationComponent };
//# sourceMappingURL=nachtransactionpresentation.component.js.map