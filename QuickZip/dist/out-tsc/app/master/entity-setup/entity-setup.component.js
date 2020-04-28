import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EntitySetupServiceService } from '../../services/enity_setup/entity-setup-service.service';
var EntitySetupComponent = /** @class */ (function () {
    function EntitySetupComponent(ESService, formBuilder) {
        this.ESService = ESService;
        this.formBuilder = formBuilder;
        this.MainGideDiv = true;
        this.EntityFormDiv = false;
        this.Preloader = true;
        this.EMandateMode = false;
        this.NetBankingTab = false;
        this.DebitCardTab = false;
        this.AadhaarCardTab = false;
        this.ActivePaymentModeTab = false;
        this.PhysicalTab = false;
        this.IsThirdTransactionTab = false;
    }
    EntitySetupComponent.prototype.ngOnInit = function () {
        this.EntitySetupForm = this.formBuilder.group({
            Code: [''],
            EntityName: [''],
            AppID: [''],
            MerchantKey: [''],
            Name: [''],
            Email: [''],
            MobileNo: [''],
            Address: [''],
            Country: [''],
            State: [''],
            City: [''],
            PinCode: [''],
            UserName: [''],
            EntityBCode: [''],
            IsEMandate: [''],
            IsOverPrintMandate: [''],
            NetBankingCh: [''],
            DebitCardCh: [''],
            AadhaarCardCh: [''],
            ActivePaymentModeCh: ['']
            // IsPhysicalMandatCh: [''],
            // IsThirdTransactionCh:['']
        });
        this.Preloader = false;
        this.BindCountryAndBank();
        this.BingGrid();
    };
    EntitySetupComponent.prototype.BindCountryAndBank = function () {
        var _this = this;
        this.ESService.BindCountryAndBank().subscribe(function (data) {
            _this.CountryData = data.Table;
            _this.BankData = data.Table1;
            _this.EntityBusinessCodeData = data.Table2;
        });
    };
    EntitySetupComponent.prototype.CountryFunction = function (CountryId) {
    };
    EntitySetupComponent.prototype.BingGrid = function () {
        var _this = this;
        this.Preloader = true;
        this.ESService.BingGrid().subscribe(function (data) {
            _this.Preloader = false;
            _this.MainGridData = data.Table;
        });
    };
    EntitySetupComponent.prototype.NewFun = function () {
        this.MainGideDiv = false;
        this.EntityFormDiv = true;
    };
    EntitySetupComponent.prototype.BackFun = function () {
        //this.InsertAllFun();
        //alert(this.AllFields.IsOverPrintMandate.value);
        //alert(this.AllFields.IsEMandate.value);
        this.MainGideDiv = true;
        this.EntityFormDiv = false;
    };
    Object.defineProperty(EntitySetupComponent.prototype, "AllFields", {
        get: function () { return this.EntitySetupForm.controls; },
        enumerable: true,
        configurable: true
    });
    EntitySetupComponent.prototype.InsertAllFun = function () {
        var Code = this.AllFields.Code.value;
        var EntityName = this.AllFields.EntityName.value;
        var AppId = this.AllFields.AppID.value;
        var MerchantKey = this.AllFields.MerchantKey.value;
        var Name = this.AllFields.Name.value;
        var Email = this.AllFields.Email.value;
        var MobileNo = this.AllFields.MobileNo.value;
        var Address = this.AllFields.Address.value;
        var Country = this.AllFields.Country.value;
        var State = this.AllFields.State.value;
        var City = this.AllFields.City.value;
        var PinCode = this.AllFields.PinCode.value;
        var UserName = this.AllFields.UserName.value;
        var EntityBCode = this.AllFields.EntityBCode.value;
    };
    EntitySetupComponent.prototype.IsEMandateFun = function () {
        if (this.AllFields.IsEMandate.value == true) {
            this.EMandateMode = true;
        }
        else {
            this.EMandateMode = false;
        }
    };
    EntitySetupComponent.prototype.NetBankingFun = function () {
        if (this.AllFields.NetBankingCh.value == true) {
            this.NetBankingTab = true;
        }
        else {
            this.NetBankingTab = false;
        }
    };
    EntitySetupComponent.prototype.DebitCardFun = function () {
        if (this.AllFields.DebitCardCh.value == true) {
            this.DebitCardTab = true;
        }
        else {
            this.DebitCardTab = false;
        }
    };
    EntitySetupComponent.prototype.AadhaarCardFun = function () {
        if (this.AllFields.AadhaarCardCh.value == true) {
            this.AadhaarCardTab = true;
        }
        else {
            this.AadhaarCardTab = false;
        }
    };
    EntitySetupComponent.prototype.ActivePaymentModeFun = function () {
        if (this.AllFields.ActivePaymentModeCh.value == true) {
            this.ActivePaymentModeTab = true;
        }
        else {
            this.ActivePaymentModeTab = false;
        }
    };
    EntitySetupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-entity-setup',
            templateUrl: './entity-setup.component.html',
            styleUrls: ['./entity-setup.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [EntitySetupServiceService, FormBuilder])
    ], EntitySetupComponent);
    return EntitySetupComponent;
}());
export { EntitySetupComponent };
//# sourceMappingURL=entity-setup.component.js.map